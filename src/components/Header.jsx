import React from 'react'
import { useContext } from 'react'
import { PokeContext } from '../Context'

const Header = () => {
  const {data, setData} = useContext(PokeContext);

  return (
    <div>
      <h2>Header</h2>
      <button onClick={() => console.log({data})}>Call Data</button>
    </div>
  )
}

export default Header