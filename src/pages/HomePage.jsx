import React, { useContext, useState } from 'react'
import Header from '../components/Header'
import { PokeContext } from '../Context'
import { Link } from 'react-router-dom'

const HomePage = () => {
    const { data, setData } = useContext(PokeContext);
    console.log("HomePage");
    console.log({data});

  return (
    <div className='home-page'>
    
        <div className='item-grid'>
            <ItemPreview/>
        </div>
    </div>
  )
}

export default HomePage