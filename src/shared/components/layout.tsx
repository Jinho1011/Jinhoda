import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import GlobalStyle from "@/assets/styles/GlobalStyle"

import Header from "./header/header"
import Footer from "./footer"

const LayoutContainer = styled.div``

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const data = useStaticQuery<Queries.LayoutComponentQuery>(LayoutQuery)
  const categories = data.allContentfulPostCategoryJsonNode.nodes

  return (
    <>
      <GlobalStyle />
      <LayoutContainer>
        <Header categories={categories} />
        {children}
        <Footer />
      </LayoutContainer>
    </>
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
