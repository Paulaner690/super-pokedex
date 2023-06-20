import React, { useContext, useState, useEffect } from "react";
import { PokeContext } from "../Context";
import "../assets/css/header.css";

const Header = () => {
  const { data, setData } = useContext(PokeContext);
  const [valueInput, setValueInput] = useState("");
  const [container, setContainer] = useState([]);

  useEffect(() => {
    // Update the container state with data from PokeContext
    setContainer(data);
  }, [data]);

  const valueChange = (event) => {
    setValueInput(event.target.value);
    console.log(valueInput);
  };

  const filteredData = container.filter((item) =>
    item.name.toLowerCase().includes(valueInput.toLowerCase())
  );

  return (
    <div>
      <img src="./pokemon-logo.svg" />
      <div className="header-cont">
        <button className="sandwich-menu">MENU</button>
        <input onChange={valueChange} type="text" value={valueInput} />
        <button>DarkMode</button>
      </div>

      <button onClick={() => console.log({ data })}>Call Data</button>
      <br />
      {filteredData.map((item, index) => (
        <div key={index}>
          {item.name}
          <img src={item.sprites.front_default} />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Header;
