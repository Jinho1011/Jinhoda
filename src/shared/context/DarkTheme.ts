/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from "react"

import { getIsDarkThemeInitial } from "../hooks/useDarkMode"

interface ThemeContextTypes {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

const initialState: ThemeContextTypes = {
  isDarkMode: getIsDarkThemeInitial(),
  toggleDarkMode: () => {},
}

const DarkThemeContext = createContext<ThemeContextTypes>(initialState)

export default DarkThemeContext
