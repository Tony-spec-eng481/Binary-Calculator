# 🔢 Binary Calculator (React Native + Expo)

Binary, Octal, Decimal, and Hex calculator built with React Native using Expo SDK 54. Includes conversion utilities, a history screen, and a clean mobile-friendly UI.

---

## ✨ Features
- Basic arithmetic: add, subtract, multiply, divide
- Base conversions: Decimal ↔ Binary ↔ Octal ↔ Hexadecimal
- Calculation history with context provider
- Expo Dev Client support for native debugging
- Runs on Android, iOS, and Web

---

## 🧰 Tech Stack
- React 19
- React Native 0.81 (Expo SDK 54)
- Expo 54, Expo Dev Client
- React Navigation (stack)

---

## 🚀 Getting Started

### 1) Prerequisites
- Node.js 18+ and npm 9+
- Expo CLI: `npm i -g expo` (optional; `npx expo` works too)
- Android Studio or Xcode for simulators (optional for web)

### 2) Install dependencies
```bash
npm install
# or to ensure Expo-aligned versions
npx expo install
```

### 3) Start the app
```bash
# Start dev tools / Metro bundler
npm run start

# Platform-specific shortcuts
npm run android   # open Android emulator/device
npm run ios       # open iOS simulator (macOS)
npm run web       # run in the browser
```

On first run, scan the QR code in the terminal/Expo Dev Tools with the Expo Go app or open a simulator.

---

## 📦 Scripts
- `npm run start`: Start Expo dev server
- `npm run android`: Start Android app
- `npm run ios`: Start iOS app
- `npm run web`: Start web build

---

## 🗂 Project Structure
```
.
├── App.js                    # App entry, navigation + providers
├── app.json                  # Expo app configuration
├── src/
│   ├── components/           # UI components
│   ├── screens/              # Calculator and History screens
│   ├── styles/               # Shared styles
│   └── utils/                # Converters + History context
└── assets/                   # Icons and images
```

Key files:
- `src/screens/CalculatorScreen.js`: Main calculator UI and logic
- `src/screens/HistoryScreen.js`: History list and navigation
- `src/utils/converters.js`: Conversion helpers between number bases
- `src/utils/HistoryContext.js`: Context provider for storing history

---

## ⚙️ Configuration
- Update `app.json` for app name, icons, and splash
- Environment variables: create `.env` if needed; `.env*` files are git-ignored

---

## 🔧 Troubleshooting
- If dependencies look mismatched, run: `npx expo install`
- Clear Metro cache when things act weird:
  ```bash
  npx expo start -c
  ```
- Android build issues? Ensure an emulator is running or device connected: `adb devices`
- iOS requires Xcode and Command Line Tools (macOS only)

---

## 🧪 Testing (optional)
This project does not include tests by default. You can add Jest and React Native Testing Library:
```bash
npm install --save-dev jest @testing-library/react-native react-test-renderer
```

---

## 📜 License
MIT © 
