import * as React from "react"
import { Link } from "gatsby"
import { Container } from "./styles"
import styled from "styled-components"
import Header from "./header"
import Footer from "./footer"

const ContentContainer = styled(Container)`
  padding: 20px 40px;
`

const Layout = ({ location, title, children }) => {
  const rootPath = `/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">
          {title} <span className="emoji">😄</span>
        </Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div data-is-root-path={isRootPath}>
      <Header />
      <main>
        <ContentContainer>{children}</ContentContainer>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
