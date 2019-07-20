import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'
import Button from '@components/Button'
import Logo from '@components/Logo'
import './Header.css'

function Header({ menuLinks }) {
  return (
    <header className="site-header">
      <Logo/>
      {
        menuLinks.map(({ name, link }) => <Button onClick={() => navigate(link)} type={'link'}> {name} </Button>)
      }
    </header>
  )
}

Header.propTypes = {
  menuLinks: PropTypes.array,
}

export default Header