import React from 'react'
import Logo from '@components/Logo'
import './Header.css'

function Header() {
  return (
    <header className="site-header">
      <Logo />
    </header>
  )
}

Header.propTypes = {

}

export default Header