import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Header from "./header"
import Footer from "./footer"

interface LayoutProps {
  location: Location
  children: React.ReactNode
}

const Layout = ({ location, children }: LayoutProps) => {
  const rootPath = `/`
  const isRootPath = location.pathname === rootPath
  const data = useStaticQuery<Queries.LayoutComponentQuery>(LayoutQuery)
  const title = data.site.siteMetadata.title
  const categories = data.categories.group.map(v => v.fieldValue)

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

export const LayoutQuery = graphql`
  query LayoutComponent {
    site {
      siteMetadata {
        title
      }
    }
    categories: allMarkdownRemark {
      group(field: { frontmatter: { category: SELECT } }) {
        fieldValue
        totalCount
      }
    }
  }
`
