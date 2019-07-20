import React from 'react'
import { CollectionThumb, CollectionLarge } from '@components/Image'
import DescriptionCard from '@components/DescriptionCard'
import IndexCard from '@components/IndexCard'
import './CollectionPage.css'


function CollectionPage() {
  return (
    <div className="collection-page-container">
      <CollectionThumb className="thumb" />
      <div className="large">
        <IndexCard />
        <CollectionLarge />
      </div>

      <DescriptionCard noCrown noButton />
    </div>
  )
}

export default CollectionPage