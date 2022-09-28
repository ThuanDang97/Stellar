// Library
import React, { useState } from 'react'

// Components
import MarketingList from '@components/MarketingList'

export default {
  title: 'Components/MarketingList',
  component: MarketingList,
}

export const MarketingComponent = () => {
  const [selectedItem, setSelectedItem] = useState<string[]>([])

  return (
    <MarketingList
      selectedItem={selectedItem}
      setSelectedItem={setSelectedItem}
    />
  )
}
