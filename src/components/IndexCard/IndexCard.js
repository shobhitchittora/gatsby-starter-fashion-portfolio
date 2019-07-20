import React from 'react'
import PropTypes from 'prop-types'
import './IndexCard.css'

function IndexCard({ index }) {
  return (
    <div className='index-card-container'>
      <span className="index-card-title">Something awesome</span>
      <span className="index-card-index">{index}</span>
    </div>
  )
}

IndexCard.propTypes = {
  index: PropTypes.number
}

export default IndexCard
