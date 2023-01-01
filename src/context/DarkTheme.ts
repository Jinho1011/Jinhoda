import { createContext } from "react"
import { getIsDarkThemeInitial } from "../hooks/useDarkMode"

interface ThemeContextTypes {
  isDarkMode: boolean
  setIsDarkMode: (value: boolean) => void
}

const initialState: ThemeContextTypes = {
  isDarkMode: getIsDarkThemeInitial(),
  setIsDarkMode: () => {},
}

const DarkThemeContext = createContext<ThemeContextTypes>(initialState)

export default DarkThemeContext
