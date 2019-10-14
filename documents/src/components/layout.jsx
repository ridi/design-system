import { Global } from "@emotion/core"
import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"
import { globalStyles } from "../styles/global"
import Footer from "./Footer"
import GNB from "./GNB"

const Wrapper = styled("div")`
  border: 2px solid green;
  padding: 10px;
`
export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  const { site } = data
  return (
    <Wrapper>
      <Global styles={globalStyles} />
      <Helmet title={site.siteMetadata.title} />
      <GNB />
      {children}
      <Footer />
    </Wrapper>
  )
}
