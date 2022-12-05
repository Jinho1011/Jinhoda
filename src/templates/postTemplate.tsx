import React from "react"
import { MDXProvider } from "@mdx-js/react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

interface PostTemplateProps {
  children: JSX.Element
}

const PostTemplate = ({ children }: PostTemplateProps) => {
  return (
    <Layout>
      <MDXProvider>{children}</MDXProvider>
    </Layout>
  )
}

export default PostTemplate
