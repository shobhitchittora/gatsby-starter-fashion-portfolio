import React from 'react'
import Button from '@components/Button'
import './DescriptionCard.css'
import { navigate } from 'gatsby'

function DescriptionCard() {
  return (
    <div className="card-container">
      <div className="horizontal-line" />
      <h1 className="title"> Fashion by Awesome Person </h1>
      <p className="description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <Button style={{ marginTop: '100px' }} type={'secondary'} onClick={() => navigate('/collections')}> Collections </Button>
    </div>
  )
}

export default DescriptionCard