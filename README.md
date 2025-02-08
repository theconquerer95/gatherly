# Gatherly - React Native App

Gatherly is a social media mobile app designed for university students to create, discover, and participate in events. Built with **React Native**, it offers a sleek, minimalist design with dark mode support and engaging animations.

## 🚀 Features
- **Event Creation & Discovery**: Easily create and browse university events.
- **Channels & Clubs**: Subscribe to communities for event updates.
- **Dark Mode Support**: Modern UI with vibrant colors.
- **Animations & Smooth UX**: Enhances user experience.

## 📦 Tech Stack
- **React Native** (Bare Workflow)
- **NativeWind** (Tailwind CSS for React Native)
- **TypeScript**
- **Metro Bundler** (React Native's JS bundler)
- **CocoaPods** (iOS dependency manager)

## 🔧 Setup & Installation
### 1️⃣ Prerequisites
- **Node.js 20+** (Install via `nvm`)
- **Yarn 1.22+** (Classic Yarn)
- **Xcode (for iOS)** & CocoaPods
- **Android Studio (for Android)**

### 2️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/gatherly.git
cd gatherly
```

### 3️⃣ Install Dependencies
```sh
yarn install
```

### 4️⃣ Setup iOS (Mac Only)
```sh
cd ios
pod install
cd ..
```

### 5️⃣ Start the Metro Bundler
```sh
yarn start --reset-cache
```

### 6️⃣ Run the App
- **iOS:**
  ```sh
  yarn ios
  ```
- **Android:**
  ```sh
  yarn android
  ```

## 🛠 Troubleshooting
### Port Already in Use (Metro Bundler)
```sh
lsof -i :8081  # Find the process
kill -9 <PID>  # Kill the process
yarn start --reset-cache
```

### Missing iOS Simulators
```sh
xcrun simctl list devices  # Check available devices
open -a Simulator          # Manually open the simulator
```

### NativeWind Issues (Tailwind CSS v3 Required)
```sh
yarn add tailwindcss@3.4.1
```
Ensure **babel.config.js** includes:
```js
plugins: ['nativewind/babel'],
```

## 🎨 UI & Design
- **Minimalist & Clean**
- **Dark Mode with Vibrant Accents**
- **Smooth Animations for Modern Feel**

## 🤝 Contributing
1. Fork the repo
2. Create a new branch (`feat-new-feature`)
3. Commit changes
4. Open a Pull Request

## 📜 License
MIT License © 2025 Gatherly
