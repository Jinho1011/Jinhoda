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
  const data = useStaticQuery<Queries.LayoutComponentQuery>(LayoutQuery)
  const categories = data.categories.group.map(v => v.fieldValue)

  return (
    <div>
      <Header categories={categories} />
      {children}
      <Footer />
    </div>
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
