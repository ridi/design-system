import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import PagesData from "../data/pages.yml"

export default ({ data }) => (
  <Layout>
    <h2>{data.site.siteMetadata.title}</h2>
    <p>리디를 디자인하기 위한 단 하나의 시스템.</p>
    <section>
      {PagesData.map(page => (
        <Link key={page.title} to={page.url}>
          <article>
            <h1>{page.title}</h1>
            <p>{page.description}</p>
            <span>더 알아보기</span>
          </article>
        </Link>
      ))}
    </section>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
