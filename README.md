# 🌍 Flavor Planet

Flavor Planet is an interactive web application that lets you explore world cuisines through an interactive 3D globe. Discover traditional street foods, cultural facts, and music from different countries around the world.

## ✨ Features

- 🌐 Interactive 3D Globe visualization
- 🍽️ Traditional street food recipes with AI-generated images
- 🎵 Country-specific music recommendations
- 📚 Cultural facts and food etiquette
- 🎯 Random country selection with "Spin the Globe" feature
- 🖼️ Dynamic food images generated using OpenAI's DALL·E

## 🚀 Tech Stack

### Frontend
- Next.js
- React
- TypeScript
- MobX for state management
- React Globe GL for 3D globe visualization
- Bootstrap for styling
- SASS for custom styling

### Backend
- NestJS
- TypeScript
- OpenAI API for:
  - Food descriptions
  - Cultural facts
  - Food etiquette
  - Food image generation (DALL·E)

## 🛠️ Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OpenAI API key

## 🔧 Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd flavor-planet
   ```

2. **Install dependencies**
   ```bash
   # Install frontend dependencies
   cd frontend
   npm install

   # Install backend dependencies
   cd ../backend
   npm install
   ```

3. **Environment Setup**

   Create a `.env` file in the backend directory:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```

4. **Start the development servers**

   ```bash
   # Start backend server (from backend directory)
   npm run start:dev

   # Start frontend server (from frontend directory)
   npm run dev
   ```

   The application will be available at:
   - Frontend: http://localhost:3000
   - Backend: http://localhost:3001

## 🎮 How to Use

1. **Explore Countries**
   - Click on any country on the 3D globe to view its details
   - Use the "Spin the Globe" button to randomly select a country

2. **View Country Details**
   - Street food recipes with AI-generated images
   - Cultural facts about food traditions
   - Food etiquette and customs
   - Traditional music recommendations

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- OpenAI for providing the AI capabilities
- React Globe GL for the 3D globe visualization
- All the contributors who have helped shape this project 