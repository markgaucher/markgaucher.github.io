import React from 'react'

type ThemeContext = {
  mode: 'dark' | 'light'
  toggle: () => any
}

const defaultState: ThemeContext = {
  mode: 'dark',
  toggle: () => {},
}

const ThemeContext = React.createContext<ThemeContext>(defaultState)

const getDefaultMode = () => {
  const mode = localStorage.getItem('mode')

  if (mode === 'light' || mode === 'dark') {
    return mode as ThemeContext['mode']
  }

  return 'dark'
}

// @ts-ignore
const ThemeProvider = ({ children }) => {
  const [mode, setMode] = React.useState(getDefaultMode())

  const toggle = () => {
    const updatedMode = mode === 'dark' ? 'light' : 'dark'
    localStorage.setItem('mode', updatedMode)
    setMode(updatedMode)
  }

  return (
    <ThemeContext.Provider value={{ mode, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

const useMode = () => {
  const context = React.useContext(ThemeContext)

  if (!context) {
    throw new Error('Unable to find valid mode value.')
  }

  return context.mode
}

const useToggle = () => {
  const context = React.useContext(ThemeContext)

  if (!context) {
    throw new Error('Unable to find valid mode value.')
  }

  return context.toggle
}

export { useMode, useToggle, ThemeProvider }

export default ThemeContext
