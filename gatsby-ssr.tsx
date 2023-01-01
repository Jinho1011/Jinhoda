import React from "react"
import Layout from "./src/components/layout"
import StyledThemeProvider from "./src/components/StyledThemeProvider"
import ContextAPIProvider from "./src/context/ContextAPIProvider"

export const wrapRootElement = ({ element }) => (
  <ContextAPIProvider>
    <StyledThemeProvider>{element}</StyledThemeProvider>
  </ContextAPIProvider>
)

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
