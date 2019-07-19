import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Item from '@components/Item';
import './Header.css'

function Header(props) {
  return (
    <header className="site-header">
      <Item><Link> Home </Link></Item>
      <Item><Link> Collections </Link></Item>
      
    </header>
  )
}

Header.propTypes = {
  children: PropTypes.any
}

export default Header