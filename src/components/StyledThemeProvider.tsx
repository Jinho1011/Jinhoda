import React, { useContext, useEffect, useLayoutEffect, useState } from "react"
import { DefaultTheme, ThemeProvider } from "styled-components"

import DarkThemeContext from "../context/DarkTheme"
import { getIsDarkThemeInitial } from "../hooks/useDarkMode"
import { darkTheme, lightTheme } from "../styles/theme"

const StyledThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { isDarkMode } = useContext(DarkThemeContext)
  const [theme, setTheme] = useState<null | DefaultTheme>(null)

  useEffect(() => {
    setTheme(isDarkMode ? darkTheme : lightTheme)
  }, [isDarkMode])

  if (!theme) {
    return <></>
  }

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default StyledThemeProvider
