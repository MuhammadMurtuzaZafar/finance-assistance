# 💰 AI Personal Finance Assistant for Micro-Businesses

An intelligent AI-powered financial management assistant built with **IBM Watson Orchestrate** designed specifically for micro-businesses, freelancers, and small teams (1-10 people).

![Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen.svg)

## 🎯 Problem Statement

Micro-businesses struggle with financial management because:
- They can't afford professional accountants
- Existing tools are too complex and expensive
- They lack insights into cash flow and financial health
- Manual expense tracking is time-consuming and error-prone

## ✨ Solution

An AI-powered assistant that acts as a **24/7 affordable financial advisor**, providing:

### 🔑 Core Features

1. **💳 Automatic Expense Tracking & Categorization**
   - AI reads receipts and bank statements using OCR
   - Automatically categorizes expenses (utilities, salaries, supplies, etc.)
   - Detects unusual spending patterns and alerts users
   - Real-time expense dashboard

2. **📈 Cash Flow Predictions & Alerts**
   - Predicts when cash flow might become tight
   - Sends proactive alerts for low balances
   - Prevents financial crises before they happen
   - Forecast reporting for next 30/60/90 days

3. **📋 Invoice & Payment Management**
   - Auto-generates invoices after sales
   - Tracks payment status in real-time
   - Sends automated reminders to clients
   - Payment history and analytics

4. **🧮 Tax-Ready Reports**
   - Generates simple P&L statements
   - Creates balance sheet reports
   - Highlights tax deductions
   - Export-ready for tax season

5. **💡 AI-Powered Financial Advice**
   - Analyzes business financial health
   - Suggests investment/savings strategies
   - Predictive analytics for growth
   - Benchmarking against industry standards

## 🏗️ Architecture

```
┌─────────────────────────────────────────┐
│   Frontend (HTML/CSS/JavaScript)        │
│   - Chat Interface                      │
│   - Dashboard                           │
│   - Real-time Updates                   │
└────────────┬────────────────────────────┘
             │
┌────────────▼────────────────────────────┐
│   Node.js/Express Backend               │
│   - Authentication                      │
│   - API Endpoints                       │
│   - Token Management                    │
└────────────┬────────────────────────────┘
             │
┌────────────▼────────────────────────────┐
│   IBM Watson Orchestrate                │
│   - AI/NLP Processing                   │
│   - OCR & Document Reading              │
│   - Workflow Automation                 │
│   - Predictive Analytics                │
└─────────────────────────────────────────┘
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** v14 or higher
- **npm** v6 or higher
- **Watson Orchestrate** API credentials
- **Git** for version control

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/MuhammadMurtuzaZafar/finance-assistance.git
cd finance-assistance
```

2. **Install dependencies:**
```bash
npm install
```

3. **Configure environment variables:**

Create a `.env` file in the root directory:

```plaintext
# Watson Orchestrate Configuration
WXO_API_KEY=your_api_key_here
WXO_INSTANCE_URL=https://api.dl.watson-orchestrate.ibm.com/instances/YOUR_INSTANCE_ID

# Server Configuration
PORT=3000
NODE_ENV=development
```

4. **Start the server:**
```bash
npm start
```

5. **Open in browser:**
Navigate to `http://localhost:3000`

## 📁 Project Structure

```
finance-assistance/
├── index.html              # Main HTML file with chat widget
├── styles.css              # UI styling
├── server.js               # Express server & API endpoints
├── .env                    # Environment variables (gitignored)
├── .env.example            # Example env file
├── .gitignore              # Git ignore rules
├── package.json            # Dependencies & scripts
├── README.md               # This file
└── SETUP_GUIDE.md          # Detailed setup guide
```

## 🔧 API Endpoints

### Authentication
- **POST** `/api/auth/wxo-token` - Get Watson Orchestrate token
- **GET** `/api/health` - Server health check
- **GET** `/api/config-check` - Configuration status (dev only)

### Usage Examples

**Get Authentication Token:**
```bash
curl -X POST http://localhost:3000/api/auth/wxo-token \
  -H "Content-Type: application/json"
```

**Check Server Health:**
```bash
curl http://localhost:3000/api/health
```

## 🔐 Security

- ✅ API keys stored in `.env` (never committed)
- ✅ Environment-specific configuration
- ✅ CORS protection ready
- ✅ Input validation on all endpoints
- ✅ Error handling without exposing sensitive data

## 📊 Technology Stack

| Component | Technology |
|-----------|-----------|
| **Frontend** | HTML5, CSS3, JavaScript (Vanilla) |
| **Backend** | Node.js, Express.js |
| **AI/NLP** | IBM Watson Orchestrate |
| **Authentication** | Bearer Token (JWT-compatible) |
| **Environment** | dotenv for configuration |
| **HTTP Client** | Axios |

## 🎓 How to Use

### For Users

1. **Open the application** at `http://localhost:3000`
2. **Chat with the AI assistant** using natural language
3. **Upload receipts** for automatic expense tracking
4. **View insights** and financial predictions
5. **Generate reports** for accounting/tax purposes

### For Developers

See [CONTRIBUTING.md](CONTRIBUTING.md) for development guidelines.

## 🐛 Troubleshooting

### Issue: "WXO_API_KEY is not configured"
**Solution:** Add your API key to the `.env` file and restart the server.

### Issue: "Token request failed: 500"
**Solution:** 
1. Run `npm install` to ensure all dependencies are installed
2. Verify `.env` file has both `WXO_API_KEY` and `WXO_INSTANCE_URL`
3. Check server logs for detailed error messages
4. Visit `http://localhost:3000/api/config-check` to diagnose

### Issue: Chat widget not loading
**Solution:**
1. Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
2. Check browser console (F12) for JavaScript errors
3. Verify Watson Orchestrate credentials are correct
4. Check that `agentId` and `agentEnvironmentId` are valid

## 📚 Documentation

- [Setup Guide](SETUP_GUIDE.md) - Detailed setup instructions
- [Watson Orchestrate Docs](http://developer.watson-orchestrate.ibm.com)
- [Watson Orchestrate Chat Embedding](http://developer.watson-orchestrate.ibm.com/manage/channels#embedding-web-chat)

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Team

**Hackathon Project** - AI Personal Finance Assistant for Micro-Businesses

Built with ❤️ for the IBM Watson Orchestrate Hackathon

## 🎯 Future Roadmap

- [ ] Mobile app (React Native)
- [ ] Multi-currency support
- [ ] Integration with popular accounting software
- [ ] Advanced ML models for better predictions
- [ ] Real-time bank account synchronization
- [ ] Blockchain-based transaction verification
- [ ] Multi-language support
- [ ] White-label solution for resellers

## 📧 Support

For issues, questions, or feedback:
- Open an issue on GitHub
- Check existing documentation
- Review troubleshooting section

## 🙏 Acknowledgments

- IBM Watson Orchestrate team for the amazing platform
- All contributors and testers
- Micro-business owners who shared their challenges

---

**Made with 💻 and ☕ for micro-business owners**
# finance-assistance
