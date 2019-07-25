import React from 'react'
import PropTypes from 'prop-types'
import GridItem from './GridItem'
import Img from 'gatsby-image'
import './Grid.css'

function Grid({ items }) {
  return (
    <div className='grid-container'>
      {
        items.map(({ node }) =>
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