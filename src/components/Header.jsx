import React, { useContext } from 'react'
import { PokeContext } from '../Context'
import ItemPreview from './ItemPreview';

const Header = () => {
  const {data, setData} = useContext(PokeContext);

  return (
    <div>
      <h2>Header</h2>
      <button onClick={() => console.log({data})}>Call Data</button>
      {/* <ItemPreview/> */}
    </div>
  )
}

export default Header