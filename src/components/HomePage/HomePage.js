import React from 'react'
// import Logo from '@components/Logo'
import DescriptionCard from '@components/DescriptionCard'
import Image from '@components/Image'
import './HomePage.css'

function HomePageContainer() {
  return (
    <div className="home-container">
      <div className="item1">
        {/* <Logo /> */}
        <DescriptionCard />
      </div>
      <div className="item2">
        <Image withFrame />
      </div>
    </div>
  )
}

export default HomePageContainer