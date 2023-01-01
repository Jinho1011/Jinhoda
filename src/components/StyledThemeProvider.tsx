import React, { useContext, useEffect } from "react"
import { ThemeProvider } from "styled-components"
import DarkThemeContext from "../context/DarkTheme"
import { darkTheme, lightTheme } from "../styles/theme"

const StyledThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { isDarkMode } = useContext(DarkThemeContext)
  const theme = isDarkMode ? darkTheme : lightTheme

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? "#18171C" : "#ffffff"
  }, [isDarkMode])

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default StyledThemeProvider
