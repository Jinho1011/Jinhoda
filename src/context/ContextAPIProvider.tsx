import React, { useCallback, useState } from "react"
import { getIsDarkThemeInitial } from "../hooks/useDarkMode"
import DarkThemeContext from "./DarkTheme"

const ContextAPIProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(getIsDarkThemeInitial())

  const setIsDarkModeHandler = useCallback((value: boolean) => {
    setIsDarkMode(value)
  }, [])

  return (
    <DarkThemeContext.Provider
      value={{
        isDarkMode: isDarkMode,
        setIsDarkMode: setIsDarkModeHandler,
      }}
    >
      {children}
    </DarkThemeContext.Provider>
  )
}

export default ContextAPIProvider
