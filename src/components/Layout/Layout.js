/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "@components/Header"
import SideBar from '@components/SideBar';
import "./Layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks{
            name
            link
          }
          socialLinks{
            name
            link
          }
        }
      }
    }
  `)

  return (
    <div id="App">
      <SideBar
        pageWrapId={"page-wrap"}
        outerContainerId={"App"}
        menuLinks={data.site.siteMetadata.menuLinks}
        socialLinks={data.site.siteMetadata.socialLinks}
        right />
      <div
        id="page-wrap"
        style={{
          margin: `0 auto`,
          paddingTop: 0,
          display: 'grid'
        }}
      >
        <Header
          siteTitle={data.site.siteMetadata.title}

        />
        <main>{children}</main>
      </div>
    </div>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
