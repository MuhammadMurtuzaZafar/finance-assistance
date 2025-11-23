# Watson Orchestrate Authentication Setup

## Error Resolution

You're seeing a **401 Unauthorized** error because the Watson Orchestrate chat widget requires authentication.

## Required Configuration

1. **agentEnvironmentId** - Added to your configuration
   - Value: `1204da90-9213-423d-9650-53edbdb8d370`

2. **Authentication Token** - Required for API calls
   - The chat widget needs a valid auth token to access the agent

## Steps to Fix

### Option 1: Use Service Instance URL (Recommended)

Update your configuration to use the service instance:

```javascript
window.wxOConfiguration = {
    orchestrationID: "20251122-1800-1311-1064-7f0d4c11a37b_20251122-1800-1929-204d-034c623802de",
    hostURL: "https://dl.watson-orchestrate.ibm.com",
    serviceInstanceUrl: "https://api.dl.watson-orchestrate.ibm.com/instances/20251122-1800-1929-204d-034c623802de",
    rootElementID: "root",
    chatOptions: {
        agentId: "886acbbe-c2ec-41ac-adb5-7da189613256",
        agentEnvironmentId: "1204da90-9213-423d-9650-53edbdb8d370"
    }
};
```

### Option 2: Implement Backend Authentication

Create a backend endpoint to provide auth tokens:

```javascript
// In your backend (Node.js/Express example)
app.get('/api/auth/wxo-token', async (req, res) => {
    try {
        // Get token from Watson Orchestrate API
        const token = await getWatsonOrchTokenFromAPI();
        res.json({ token });
    } catch (error) {
        res.status(401).json({ error: 'Failed to get token' });
    }
});
```

Then fetch it in your HTML:

```javascript
async function getAuthToken() {
    try {
        const response = await fetch('/api/auth/wxo-token');
        const data = await response.json();
        return data.token;
    } catch (error) {
        console.error('Failed to fetch auth token:', error);
        return null;
    }
}
```

### Option 3: Check Watson Orchestrate Documentation

Visit: http://developer.watson-orchestrate.ibm.com/manage/channels#embedding-web-chat

This provides the latest setup instructions for web chat embedding.

## Verification Checklist

- [ ] `agentEnvironmentId` is added to chatOptions
- [ ] `serviceInstanceUrl` is configured
- [ ] Authentication token is being retrieved
- [ ] CORS is properly configured (if using different domain)
- [ ] Agent is published and active

## Common Issues

| Issue | Solution |
|-------|----------|
| 401 Unauthorized | Add agentEnvironmentId and ensure auth token is valid |
| authTokenNeeded event | Implement token retrieval function |
| Cannot read properties of null | Agent details failed to load - check authentication |
| CORS errors | Ensure service instance URL is whitelisted |

## Testing

1. Open browser DevTools (F12)
2. Check Network tab for failed requests
3. Check Console for error messages
4. Verify configuration object in console: `console.log(window.wxOConfiguration)`
