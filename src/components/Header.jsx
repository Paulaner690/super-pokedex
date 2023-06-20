import React, { useContext, useState, useEffect } from "react";
import { PokeContext } from "../Context";
import "../assets/css/header.css";
import TypeSelector from "./TypeSelector";
import menu from "/menu.svg"

const Header = () => {
  const { data, setData } = useContext(PokeContext);
  const [valueInput, setValueInput] = useState("");
  const [container, setContainer] = useState([]);
  const [typeSelectorVisible, setTypeSelectorVisible] = useState(false);

  useEffect(() => {
    // Update the container state with data from PokeContext
    setContainer(data);
  }, [data]);

  const valueChange = (event) => {
    setValueInput(event.target.value);
    setData(filteredData);
    console.log(valueInput);
  };

  const filteredData = container.filter((item) =>
    item.name.toLowerCase().includes(valueInput.toLowerCase())
  );
  
  

  const handleHamburgerClick = () => {
    setTypeSelectorVisible(true);
  };


  return (
    <div>
      {typeSelectorVisible ? (<TypeSelector close={setTypeSelectorVisible}/>) :
      (<div>
        <img className="logo" src="./pokemon-logo.svg" />
        <div className="header-cont">
          <button className="sandwich-menu" onClick={() => handleHamburgerClick()}> <img src={menu}/></button>
          <input onChange={valueChange} type="text" value={valueInput} />
        </div>
      </div>)
      }

    </div>
    
  );
};

export default Header;
