import React, { useContext, useEffect, useLayoutEffect } from "react"
import { ThemeProvider } from "styled-components"
import DarkThemeContext from "../context/DarkTheme"
import { getIsDarkThemeInitial } from "../hooks/useDarkMode"
import { darkTheme, lightTheme } from "../styles/theme"

const StyledThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const initialIsDarkMode = getIsDarkThemeInitial()
  const { isDarkMode } = useContext(DarkThemeContext)
  const theme = isDarkMode ? darkTheme : lightTheme

  useLayoutEffect(() => {
    document.body.style.backgroundColor = initialIsDarkMode
      ? "#18171C"
      : "#ffffff"
  }, [])

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? "#18171C" : "#ffffff"
  }, [isDarkMode])

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default StyledThemeProvider
