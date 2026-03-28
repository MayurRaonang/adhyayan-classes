import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('adhyayan-theme') === 'dark'
  })

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.setAttribute('data-theme', 'dark')
      localStorage.setItem('adhyayan-theme', 'dark')
    } else {
      root.removeAttribute('data-theme')
      localStorage.setItem('adhyayan-theme', 'light')
    }
  }, [isDark])

  const toggleTheme = () => setIsDark(prev => !prev)

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
