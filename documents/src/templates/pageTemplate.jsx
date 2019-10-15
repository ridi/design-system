import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { html } = markdownRemark
  return (
    <Layout>
      <div style={{ color: `pink` }}>
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
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
    }
  }
`
