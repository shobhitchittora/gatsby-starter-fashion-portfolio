import React from 'react'
import PropTypes from 'prop-types'
import './Item.css'

function Item({ name, children }) {
  return (
    <div className="Item">
      {name}
      {children}
    </div>
  )
}

Item.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node,
}

export default Item