import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./Header"

const MainWrap = styled.div`
  background-color: var(--color-background);
  // padding-left: 16px;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          url
          author
        }
      }
    }
  `)

  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }
  return (
    <>
      <Header title={data.site.siteMetadata.title} />
      <div className="flex flex-col h-screen justify-between">
        <main className="mb-auto">
          <MainWrap>
            {children}
          </MainWrap>
        </main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
