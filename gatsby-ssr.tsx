import React from "react"
import StyledThemeProvider from "./src/components/StyledThemeProvider"
import ContextAPIProvider from "./src/context/ContextAPIProvider"

export const wrapRootElement = ({ element }) => (
  <ContextAPIProvider>
    <StyledThemeProvider>{element}</StyledThemeProvider>{" "}
  </ContextAPIProvider>
)
