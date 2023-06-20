import React, { useContext, useState } from 'react';
import { PokeContext } from '../Context';
import TypeSelector from './TypeSelector';

const Header = () => {
  const { data, setData } = useContext(PokeContext);
  const [typeSelectorVisible, setTypeSelectorVisible] = useState(false);

  const handleHamburgerClick = () => {
    setTypeSelectorVisible(true);
  };

  return (
    <div>
      {typeSelectorVisible ? (
        <div>
          <img src="/pokemonLogo.png" alt="Pokemon Logo" />
          <TypeSelector close={setTypeSelectorVisible} />
        </div>
      ) : (
        <div className='header'>
          <h2>Header</h2>
          <div className='hamburger' onClick={handleHamburgerClick}>
            Show Type Selector
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
