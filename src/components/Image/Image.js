import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import './Image.css'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = ({ withFrame }) => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "gal-gadot-home.jpg" }) {
        childImageSharp {
          fixed(width: 900) {
            ...GatsbyImageSharpFixed
          }
          fluid(maxWidth: 780){
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
