import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { CollectionThumb, CollectionLarge } from '@components/Image'
import DescriptionCard from '@components/DescriptionCard'
import IndexCard from '@components/IndexCard'
import Button from '@components/Button'
import { Grid } from '@components/Grid'
import './CollectionPage.css'
import { pages as PAGES } from './collections.json'

function CollectionPage() {
  const data = useStaticQuery(graphql`
  query {
    allFile(filter: { name: { regex: "/page-1-*/" }, extension: { regex: "/(jpeg|jpg|gif|png)/" }, sourceInstanceName: { eq: "images"}}) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
  `)

  const [page, setPage] = useState(0)

  function incrementPage() {
    if (page < PAGES.length - 1)
      setPage(page + 1)
  }

  function decrementPage() {
    if (page > 0)
      setPage(page - 1)
  }

  function getPage() {
    return page < PAGES.length ? PAGES[page] : 'dummy'
  }

  return (
    <div className="collection-page-container">
      <div className="thumb-container">
        <CollectionThumb />
        <IndexCard index={page + 1} />
      </div>

      <div className="large">
        <CollectionLarge />
      </div>

      <div className="card">
        <DescriptionCard
          longDescription
          noButton
          title={getPage().title}
          description={getPage().description}
        />
      </div>

      <div className="btn-container">
        <Button type="secondary" style={{ fontSize: '2em' }} onClick={decrementPage} >
          ←
        </Button>
        <Button type="secondary" style={{ fontSize: '2em' }} onClick={incrementPage} >
          →
        </Button>
      </div>

      <div className="image-grid">
        <Grid items={data.allFile.edges} />
      </div>

    </div >
  )
}

export default CollectionPage