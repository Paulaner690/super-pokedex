import React, { useContext, useState } from 'react'
import Header from '../components/Header'
import { PokeContext } from '../Context'
import ItemPreview from '../components/ItemPreview'

const HomePage = () => {
    const { data, setData } = useContext(PokeContext);
    console.log("HomePage");
    console.log({data});

  return (
    <div className='home-page'>
      <Header/>
        <div className='item-grid'>
            <ItemPreview/>
        </div>
    </div>
  )
}

export default HomePage