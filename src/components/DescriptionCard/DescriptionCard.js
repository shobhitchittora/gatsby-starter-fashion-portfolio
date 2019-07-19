import React from 'react'
import Button from '@components/Button'
import './DescriptionCard.css'
import { navigate } from 'gatsby'

function DescriptionCard() {
  return (
    <div className="card-container">
      <div style={{ backgroundColor: 'orange', height: '1em', width: '5em'}}/>
      <h1 style={{ fontSize: '4.5em', fontWeight: 300 }}> Fashion by Awesome Person </h1>
      <p style={{ fontSize: '0.8rem', marginRight: '30%' , marginTop: '8%'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <Button style={{ marginTop: '100px' }} type={'secondary'} onClick={() => navigate('/collections')}> Collections </Button>
    </div>
  )
}

export default DescriptionCard