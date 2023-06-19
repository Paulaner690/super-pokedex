import React, { useState } from 'react'
import Header from '../components/Header'
import ItemPreview from '../components/ItemPreview'

const HomePage = () => {
    const [data, setData] = useState([]);

  return (
    <div className='home-page'>
        <Header/>
        <div className='item-grid'>
            {data.map(() => {
                <ItemPreview/>
            })}
        </div>
    </div>
  )
}

export default HomePage