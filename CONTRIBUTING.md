# 🤝 Contributing to Flavor Planet

Thank you for your interest in contributing to Flavor Planet! This document provides guidelines and instructions for contributing to the project.

## 📋 Code of Conduct

Please be respectful and considerate of others when contributing to this project. We aim to foster an inclusive and welcoming environment for all contributors.

## 🎯 How to Contribute

### 1. Fork and Clone

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/flavor-planet.git
   cd flavor-planet
   ```

### 2. Setup Development Environment

1. Install dependencies:
   ```bash
   # Frontend
   cd frontend
   npm install

   # Backend
   cd ../backend
   npm install
   ```

2. Create a `.env` file in the backend directory:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```

### 3. Create a Branch

Create a new branch for your feature or bugfix:
```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bugfix-name
```

### 4. Development Guidelines

#### Frontend
- Follow TypeScript best practices
- Use functional components with hooks
- Follow the existing code style
- Add proper type definitions
- Write meaningful component and function names
- Add comments for complex logic

#### Backend
- Follow NestJS best practices
- Use TypeScript decorators appropriately
- Implement proper error handling
- Add input validation
- Write meaningful service and controller names
- Add comments for complex business logic

### 5. Testing

- Write tests for new features
- Ensure all tests pass before submitting
- Update tests when modifying existing features

### 6. Commit Guidelines

Use conventional commits format:
```
feat: add new feature
fix: fix bug
docs: update documentation
style: format code
refactor: refactor code
test: add tests
chore: update dependencies
```

### 7. Pull Request Process

1. Update the README.md with details of changes if needed
2. Update the documentation if you're changing API endpoints
3. The PR will be merged once you have the sign-off of at least one other developer

## 🐛 Bug Reports

When filing a bug report, please include:
- Clear description of the issue
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots if applicable
- Environment details (browser, OS, etc.)

## 💡 Feature Requests

When suggesting a new feature:
- Provide a clear description
- Explain why it would be useful
- Include any relevant examples
- Consider potential implementation approaches

## 📝 Documentation

- Keep documentation up to date
- Use clear and concise language
- Include code examples where helpful
- Update README.md for significant changes

## 🔍 Code Review Process

1. All submissions require review
2. Reviewers will look for:
   - Code quality
   - Test coverage
   - Documentation
   - Performance considerations
   - Security implications

## 🎨 Style Guide

### Frontend
- Use 2 spaces for indentation
- Use single quotes for strings
- Use semicolons
- Use arrow functions for callbacks
- Use destructuring where appropriate

### Backend
- Use 2 spaces for indentation
- Use single quotes for strings
- Use semicolons
- Follow NestJS naming conventions
- Use async/await for asynchronous operations

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [NestJS Documentation](https://docs.nestjs.com)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [React Globe GL Documentation](https://github.com/vasturiano/react-globe.gl)

## 🙏 Thank You!

Thank you for contributing to Flavor Planet! Your contributions help make this project better for everyone. 