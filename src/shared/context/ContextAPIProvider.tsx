import React, { useCallback, useState } from "react"

import { getIsDarkThemeInitial } from "../hooks/useDarkMode"

import DarkThemeContext from "./DarkTheme"

const ContextAPIProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(getIsDarkThemeInitial())

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode(prev => !prev)
  }, [])

  return (
    <DarkThemeContext.Provider
      value={{
        isDarkMode: isDarkMode,
        toggleDarkMode: toggleDarkMode,
      }}
    >
      {children}
    </DarkThemeContext.Provider>
  )
}

export default ContextAPIProvider
