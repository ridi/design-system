import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div style={{ color: `pink` }}>
        <h1>{frontmatter.title}</h1>
        <p>
          <img src="https://source.unsplash.com/random/300x200" alt="" />
        </p>
        <div
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
