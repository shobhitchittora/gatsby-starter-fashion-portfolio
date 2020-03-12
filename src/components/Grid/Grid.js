import React from 'react'
import PropTypes from 'prop-types'
import GridItem from './GridItem'
import Img from 'gatsby-image'
import './Grid.css'

function shuffle(array) {
  array.sort(() => Math.random() - 0.5)
}

function Grid({ items, page }) {

  shuffle(items)
  const pageItems = []
  items.map(({ node }) => {
    if (node.name.includes(('page-'+page+'-grid'))) { 
      pageItems.push({'node':node})
    }
  })
  return (
    <div className='grid-container'>
      {
        pageItems.map(({ node }) =>
          <GridItem>
            <Img fluid={node.childImageSharp.fluid} />
          </GridItem>
        )
      }
    </div>
  )
}

Grid.propTypes = {
  items: PropTypes.array.isRequired
}

export default Grid;