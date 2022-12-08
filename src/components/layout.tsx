import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { ThemeProvider } from "styled-components"
import Header from "./header"
import Footer from "./footer"
import { darkTheme, lightTheme } from "../styles/theme"
import useDarkMode from "../hooks/useDarkMode"

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const [isDarkMode, setIsDarkMode] = useDarkMode()
  const theme = isDarkMode ? darkTheme : lightTheme

  const toggle = () => {
    setIsDarkMode(prev => {
      window.localStorage.setItem("color-mode", !prev ? "dark" : "light")
      return !prev
    })
  }

  const data = useStaticQuery<Queries.LayoutComponentQuery>(LayoutQuery)
  const categories = data.categories.group.map(v => v.fieldValue)

  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: theme.color.background }}>
        <Header
          categories={categories}
          isDarkMode={isDarkMode}
          toggle={toggle}
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
