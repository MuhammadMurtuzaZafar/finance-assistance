# Watson Orchestrate Setup Guide

## Step 1: Get Your API Key

1. Go to [Watson Orchestrate Developer Portal](http://developer.watson-orchestrate.ibm.com)
2. Log in to your account
3. Navigate to **API Keys** or **Credentials** section
4. Create a new API key or copy an existing one
5. Keep it safe!

## Step 2: Get Your Instance URL

Your instance URL should be in the format:
```
https://api.dl.watson-orchestrate.ibm.com/instances/YOUR_INSTANCE_ID
```

You can find this in your Watson Orchestrate dashboard or in the provided documentation.

## Step 3: Configure Environment Variables

Create a `.env` file in the project root with:

```plaintext
WXO_API_KEY=your_actual_api_key_here
WXO_INSTANCE_URL=https://api.dl.watson-orchestrate.ibm.com/instances/20251122-1800-1929-204d-034c623802de
PORT=3000
NODE_ENV=development
```

**Important**: Never commit your `.env` file to git. It's already in `.gitignore`.

## Step 4: Install Dependencies

```bash
npm install
```

## Step 5: Start the Server

```bash
npm start
```

You should see:
```
✅ Configuration check passed
🚀 Server is running at http://localhost:3000
📊 AI Finance Assistant is ready!
```

## Step 6: Test the Setup

### Option A: Check Config
Open: `http://localhost:3000/api/config-check`

You should see:
```json
{
  "hasApiKey": true,
  "hasInstanceUrl": true,
  "apiKeyLength": 32,
  "instanceUrl": "✓ Set"
}
```

### Option B: Check Health
Open: `http://localhost:3000/api/health`

You should see:
```json
{
  "status": "ok",
  "message": "Server is running",
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

### Option C: Load the Chat
Open: `http://localhost:3000`

The chat widget should load without errors.

## Troubleshooting

### Error: "WXO_API_KEY is not configured"
- Check your `.env` file exists
- Verify the API key is set correctly
- Restart the server after updating `.env`

### Error: "WXO_INSTANCE_URL is not configured"
- Add `WXO_INSTANCE_URL` to your `.env` file
- Verify the URL format is correct
- Restart the server

### Error: "Token request failed: 500"
- Run `http://localhost:3000/api/config-check` to verify configuration
- Check server logs for detailed error messages
- Verify your API key is valid and not expired

### Chat widget not loading
- Check browser console for errors (F12)
- Verify token was retrieved successfully
- Check that `agentId` and `agentEnvironmentId` are correct

## Getting Help

1. Check the [Watson Orchestrate Documentation](http://developer.watson-orchestrate.ibm.com)
2. Review server console logs when running `npm start`
3. Use `/api/config-check` endpoint to diagnose issues
