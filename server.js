require('dotenv').config();

const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname)));
app.use(express.json());

// Log configuration on startup
console.log('\n=== Watson Orchestrate Configuration ===');
console.log('WXO_API_KEY set:', !!process.env.WXO_API_KEY);
console.log('WXO_INSTANCE_URL set:', !!process.env.WXO_INSTANCE_URL);
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('=======================================\n');

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Watson Orchestrate Authentication Endpoint
app.post('/api/auth/wxo-token', async (req, res) => {
    try {
        const apiKey = process.env.WXO_API_KEY;
        const instanceUrl = process.env.WXO_INSTANCE_URL;
        
        // Detailed error messages
        if (!apiKey) {
            console.error('❌ WXO_API_KEY environment variable is missing');
            return res.status(500).json({ 
                error: 'Configuration Error',
                message: 'WXO_API_KEY is not configured. Please set it in your .env file.',
                hint: 'Example: WXO_API_KEY=your_key_here'
            });
        }

        if (!instanceUrl) {
            console.error('❌ WXO_INSTANCE_URL environment variable is missing');
            return res.status(500).json({ 
                error: 'Configuration Error',
                message: 'WXO_INSTANCE_URL is not configured. Please set it in your .env file.',
                hint: 'Example: WXO_INSTANCE_URL=https://api.dl.watson-orchestrate.ibm.com/instances/YOUR_INSTANCE_ID'
            });
        }

        console.log('📡 Attempting to fetch token from:', instanceUrl);

        // Try to get token from Watson Orchestrate API
        try {
            const tokenResponse = await axios.post(
                `${instanceUrl}/v1/authorize`,
                {},
                {
                    headers: {
                        'Authorization': `Bearer ${apiKey}`,
                        'Content-Type': 'application/json'
                    },
                    timeout: 5000
                }
            );

            const token = tokenResponse.data.token || tokenResponse.data.access_token;
            
            if (!token) {
                throw new Error('No token in response');
            }

            console.log('✅ Token retrieved successfully');
            return res.json({ 
                token,
                expiresIn: tokenResponse.data.expires_in || 3600
            });

        } catch (apiError) {
            console.error('⚠️  API Error:', apiError.message);
            
            // Fallback: Use API key directly as token
            console.log('ℹ️  Using API key as token (fallback mode)');
            return res.json({ 
                token: apiKey,
                expiresIn: 3600,
                mode: 'fallback'
            });
        }
        
    } catch (error) {
        console.error('❌ Auth endpoint error:', error.message);
        res.status(500).json({ 
            error: 'Internal Server Error',
            message: error.message,
            details: process.env.NODE_ENV === 'development' ? error.stack : undefined
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'ok',
        message: 'Server is running',
        timestamp: new Date().toISOString()
    });
});

// Config check endpoint (development only)
app.get('/api/config-check', (req, res) => {
    if (process.env.NODE_ENV !== 'development') {
        return res.status(403).json({ error: 'Not available in production' });
    }
    
    res.json({
        hasApiKey: !!process.env.WXO_API_KEY,
        hasInstanceUrl: !!process.env.WXO_INSTANCE_URL,
        apiKeyLength: process.env.WXO_API_KEY ? process.env.WXO_API_KEY.length : 0,
        instanceUrl: process.env.WXO_INSTANCE_URL ? '✓ Set' : '✗ Not set'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
    console.log(`📊 AI Finance Assistant is ready!`);
    console.log(`\n📋 Quick Links:`);
    console.log(`   - App: http://localhost:${PORT}`);
    console.log(`   - Health Check: http://localhost:${PORT}/api/health`);
    console.log(`   - Config Check: http://localhost:${PORT}/api/config-check\n`);
});
