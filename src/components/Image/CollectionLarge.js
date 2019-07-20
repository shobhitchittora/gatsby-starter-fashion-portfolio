import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import './Image.css'

const Image = ({ withFrame }) => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "gal-gadot-collection-large.jpg" }) {
        childImageSharp {
          fixed(width: 900) {
            ...GatsbyImageSharpFixed
          }
          fluid(maxWidth: 500){
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img className={classnames({ 'img-frame': withFrame })} fluid={data.image.childImageSharp.fluid} />
}

Image.propTypes = {
  withFrame: PropTypes.bool
}

export default Image
