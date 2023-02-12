import React from "react"

// normalize CSS across browsers
import "./src/normalize.css"
// custom CSS styles
import "./src/style.css"
// Highlighting for code blocks
import "prismjs/themes/prism.css"

import Layout from "./src/shared/components/layout"
import StyledThemeProvider from "./src/shared/components/StyledThemeProvider"
import ContextAPIProvider from "./src/shared/context/ContextAPIProvider"

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

export const wrapRootElement = ({ element }) => (
  <ContextAPIProvider>
    <StyledThemeProvider>{element}</StyledThemeProvider>
  </ContextAPIProvider>
)
