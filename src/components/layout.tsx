import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { ThemeProvider } from "styled-components"
import Header from "./header"
import Footer from "./footer"
import { darkTheme, lightTheme } from "../styles/theme"

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const [isDarkMode, setIsDarkMode] = React.useState(false)

  const data = useStaticQuery<Queries.LayoutComponentQuery>(LayoutQuery)
  const categories = data.categories.group.map(v => v.fieldValue)

  const theme = isDarkMode ? darkTheme : lightTheme

  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: theme.color.background, height: "100vh" }}>
        <Header
          categories={categories}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
        />
        {children}
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default Layout

export const LayoutQuery = graphql`
  query LayoutComponent {
    site {
      siteMetadata {
        title
      }
    }
    categories: allMdx {
      group(field: { frontmatter: { category: SELECT } }) {
        fieldValue
        totalCount
      }
    }
  }
`
