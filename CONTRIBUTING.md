# Contributing to AI Personal Finance Assistant

Thank you for your interest in contributing! This document provides guidelines for contributing to the project.

## 🚀 Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/finance-assistance.git`
3. Create a feature branch: `git checkout -b feature/your-feature-name`
4. Install dependencies: `npm install`
5. Create a `.env` file with your Watson Orchestrate credentials

## 📝 Development Workflow

### Before You Start
- Check existing issues and pull requests
- Open an issue to discuss major changes
- Follow the existing code style

### Making Changes
1. Make your changes in your feature branch
2. Test thoroughly: `npm start`
3. Ensure no console errors
4. Update documentation if needed

### Committing
```bash
# Use clear, descriptive commit messages
git commit -m "feat: add expense categorization"
git commit -m "fix: resolve token refresh issue"
git commit -m "docs: update setup guide"
```

### Pushing & Pull Requests
1. Push to your fork: `git push origin feature/your-feature-name`
2. Open a Pull Request on GitHub
3. Provide a clear description of changes
4. Link any related issues: `Fixes #123`

## 🎨 Code Style

### JavaScript
- Use 4 spaces for indentation
- Use camelCase for variables and functions
- Use UPPER_CASE for constants
- Add comments for complex logic
- Use template literals for strings

### HTML/CSS
- Use semantic HTML5 tags
- Use BEM naming for CSS classes
- Mobile-first responsive design
- Keep CSS organized by component

### Comments
```javascript
// ✅ Good: Clear and concise
const fetchUserData = async () => {
    // Retry logic with exponential backoff
    // ...
};

// ❌ Avoid: Unclear or redundant
// Get the data
const data = getData();
```

## 🧪 Testing

Before submitting:
- [ ] Test locally: `npm start`
- [ ] Check `/api/health` endpoint
- [ ] Check `/api/config-check` endpoint
- [ ] Verify Watson chat loads
- [ ] Test error handling

## 📋 Pull Request Checklist

- [ ] Branch is up-to-date with `main`
- [ ] Code follows style guidelines
- [ ] Added comments for complex logic
- [ ] No console errors or warnings
- [ ] Updated README if needed
- [ ] Commit messages are clear
- [ ] No API keys in code

## 🐛 Bug Reports

Include:
- Error message and stack trace
- Steps to reproduce
- Expected vs actual behavior
- Environment (OS, Node version, etc.)
- Screenshots if applicable

## 💡 Feature Requests

Include:
- Clear description of the feature
- Use cases and benefits
- Possible implementation approach
- Any mockups or examples

## ❓ Questions?

- Open an issue with the `question` label
- Check existing issues first
- Be descriptive and provide context

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for helping make this project better! 🙌
