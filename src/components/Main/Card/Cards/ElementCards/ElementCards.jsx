import React from "react";
import "./elementcard.css";

function ElementCards({ character }) {
  return (
    <div className="ElementCards">
      <img src={character.image} alt={character.name} />
      <div className="info">
        <div className="info_name">
          <h2>{character.name}</h2>
          <div className="info_name_state">
            <h4>{character.status}</h4>
            <h4>-</h4>
            <h4>{character.species}</h4>
          </div>
        </div>
        <div className="info_location">
          <h3>Last know location:</h3>
          <h5>{character.location.name}</h5>
        </div>
        <div className="info_seen">
          <h3>First seen in:</h3>
          <h5>--</h5>
        </div>
      </div>
    </div>
  );
}

export default ElementCards;
