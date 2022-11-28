import * as React from "react"
import { Link } from "gatsby"
import Header from "./header"
import Footer from "./footer"

interface LayoutProps {
  location: Location
  title: string
  children: React.ReactNode
  categories: string[]
}

const Layout = ({ location, title, children, categories }: LayoutProps) => {
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
      <Header categories={categories} />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
