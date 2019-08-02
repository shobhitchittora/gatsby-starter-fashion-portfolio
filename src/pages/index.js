import React from "react"
import Layout from "@components/Layout"
import SEO from "@components/SEO"
import HomePage from "@components/HomePage"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomePage />
  </Layout>
)

export default IndexPage
