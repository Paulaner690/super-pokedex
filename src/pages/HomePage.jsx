import React, { useState } from 'react'
import Header from '../components/Header'
import ItemPreview from '../components/ItemPreview'
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [data, setData] = useState([]);

  return (
    <div className='home-page'>
        <Header/>
        <Link to={"/pokemon/0"}>Details</Link>
        <div className='item-grid'>
            {data.map(() => {
                <ItemPreview/>
            })}
        </div>
    </div>
  )
}

export default HomePage