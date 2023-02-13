import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import Header from "./header/header"
import Footer from "./footer"

const LayoutContainer = styled.div`
  background-color: ${({ theme }) => theme.color.background};
`

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const data = useStaticQuery<Queries.LayoutComponentQuery>(LayoutQuery)
  const categories = data.allContentfulPostCategoryJsonNode.nodes

  return (
    <LayoutContainer>
      <Header categories={categories} />
      {children}
      <Footer />
    </LayoutContainer>
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
    allContentfulPostCategoryJsonNode {
      nodes {
        type
      }
    }
  }
`
