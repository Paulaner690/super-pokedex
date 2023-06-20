import React, { useContext } from 'react'
import { PokeContext } from '../Context'

const Header = () => {
  const { data, setData } = useContext(PokeContext);
  const [typeSelectorVisible, setTypeSelectorVisible] = useState(false);

  const handleHamburgerClick = () => {
    setTypeSelectorVisible(true);
  };

  return (
    <div>
      <h2>Header</h2>
      <button onClick={() => console.log({data})}>Call Data</button>
    </div>
  );
};

export default Header;
