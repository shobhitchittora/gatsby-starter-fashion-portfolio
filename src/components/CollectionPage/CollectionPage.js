import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from '@components/Image'
import DescriptionCard from '@components/DescriptionCard'
import IndexCard from '@components/IndexCard'
import Button from '@components/Button'
import { Grid } from '@components/Grid'
import './CollectionPage.css'
import { pages as PAGES } from './collections.json'


function CollectionPage() {
  const data = useStaticQuery(graphql`
  query {
    gridImages: allFile(filter: { name: { regex: "/page-1-grid-*/" }, extension: { regex: "/(jpeg|jpg|gif|png)/" }, sourceInstanceName: { eq: "images"}}) {
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

    allThumbImages: allFile(filter: { name: { regex: "/thumb/" }, extension: { regex: "/(jpeg|jpg|gif|png)/" }, sourceInstanceName: { eq: "images"}}) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 300, maxHeight: 240) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    allLargeImages: allFile(filter: { name: { regex: "/large/" }, extension: { regex: "/(jpeg|jpg|gif|png)/" }, sourceInstanceName: { eq: "images"}}) {
      edges {
        node {
          name
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

  function getThumbImage() {
    return data.allThumbImages.edges.find((image) => {
      return image.node.name === `page-${page + 1}-thumb`
    }) ||

      data.allThumbImages.edges.find((image) => {
        return image.node.name === `page-1-thumb`
      })
  }


  function getLargeImage() {
    return data.allLargeImages.edges.find((image) => {
      return image.node.name === `page-${page + 1}-large`
    }) ||

      data.allLargeImages.edges.find((image) => {
        return image.node.name === `page-1-large`
      })
  }

  return (
    <div className="collection-page-container">
      <div className="thumb-container">
        <Image fluid={getThumbImage().node.childImageSharp.fluid} />
        <IndexCard index={page + 1} />
      </div>

      <div className="large">
        <Image fluid={getLargeImage().node.childImageSharp.fluid} />
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
        <Grid items={data.gridImages.edges} />
      </div>

    </div>
  )
}

export default CollectionPage