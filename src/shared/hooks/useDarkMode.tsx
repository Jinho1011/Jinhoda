import { useState } from "react"

export const getIsDarkThemeInitial = () => {
  if (typeof window !== "undefined") {
    const persistedColorPreference = window.localStorage.getItem("color-mode")
    const hasPersistedPreference = typeof persistedColorPreference === "string"

    if (hasPersistedPreference) {
      return persistedColorPreference === "dark"
    }

    const mql = window.matchMedia("(prefers-color-scheme: dark)")
    const hasMediaQueryPreference = typeof mql.matches === "boolean"
    if (hasMediaQueryPreference) {
      return mql.matches
    }
  }

  return false
}

const useDarkMode = () => {
  return useState(getIsDarkThemeInitial)
}

export default useDarkMode
