import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import './Image.css'

const Image = ({ withFrame }) => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "gal-gadot-collection-thumb.jpg" }) {
        childImageSharp {
          fixed(width: 350) {
            ...GatsbyImageSharpFixed
          }
          fluid(maxWidth: 300){
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img className={classnames({ 'img-frame': withFrame })} fixed={data.image.childImageSharp.fixed} />
}

Image.propTypes = {
  withFrame: PropTypes.bool
}

export default Image
