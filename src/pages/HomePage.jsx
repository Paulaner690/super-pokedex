import React, { useState } from 'react'
import Header from '../components/Header'
import ItemPreview from '../components/ItemPreview'

const HomePage = () => {
    const [data, setData] = useState([]);

  return (
    <div className='home-page'>
    
        <div className='item-grid'>
            <ItemPreview/>
        </div>
    </div>
  )
}

export default HomePage