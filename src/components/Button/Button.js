import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './Button.css'

function Button({ onClick, type, style, className, children }) {
  return (
    <button className={classnames(className, 'Button', `Button-${type}`)} style={style} onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  style: PropTypes.object,
  className: PropTypes.string,
  type: PropTypes.oneOf('primary', 'secondary', 'link'),
  children: PropTypes.node,
}

export default Button