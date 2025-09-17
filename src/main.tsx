import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Capacitor } from '@capacitor/core'
import { SplashScreen } from '@capacitor/splash-screen'
import { StatusBar, Style } from '@capacitor/status-bar'
import { Keyboard } from '@capacitor/keyboard'
import App from './App.tsx'
import './index.css'

// Initialize Capacitor plugins for mobile
const initializeApp = async () => {
  if (Capacitor.isNativePlatform()) {
    // Configure status bar
    await StatusBar.setStyle({ style: Style.Light })
    await StatusBar.setBackgroundColor({ color: '#0ea5e9' })

    // Configure keyboard
    Keyboard.addListener('keyboardWillShow', () => {
      document.body.classList.add('keyboard-open')
    })

    Keyboard.addListener('keyboardWillHide', () => {
      document.body.classList.remove('keyboard-open')
    })

    // Hide splash screen after app is ready
    setTimeout(async () => {
      await SplashScreen.hide()
    }, 1000)
  }
}

// Initialize app
initializeApp()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
