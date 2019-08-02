import React from "react"
import Layout from "@components/Layout"
import SEO from "@components/SEO"
import CollectionPageContainer from "@components/CollectionPage"

function CollectionPage() {
  return (
    <Layout>
      <SEO title="Collections" />
      <CollectionPageContainer />
    </Layout>
  )
}

export default CollectionPage
