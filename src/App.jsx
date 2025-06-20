import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        {/* Rest of your app components */}
      </div>
    </ThemeProvider>
  )
}

export default App 