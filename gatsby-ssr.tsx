import React from "react"
import StyledThemeProvider from "./src/components/StyledThemeProvider"

export const wrapRootElement = ({ element }) => (
  <StyledThemeProvider>{element}</StyledThemeProvider>
)
;``
