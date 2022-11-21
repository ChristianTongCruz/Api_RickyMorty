import React, { useState, useEffect } from "react";
import ElementCards from "./ElementCards/ElementCards";
import "./cards.css";
import Api from "./API/Api";

function Cards() {
  const [characters, setcharacters] = useState([]);

  const Get_Data_Api = async () => {
    const data = await Api();
    setcharacters(data.results);
  };

  useEffect(() => {
    Get_Data_Api();
  }, []);

  return (
    <div className="Cards">
      {characters.map((character) => {
        return (
          <div key={character.id}>
            <ElementCards character={character} />
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
