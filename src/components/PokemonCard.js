import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {

  const [front, setFront] = useState(true);

  function flip() {
    setFront(front => front = !front)
  }

  return (
    <Card>
      <div onClick={flip} >
        <div className="image">
          <img alt={pokemon.image}
          src={front ? pokemon.sprites.front : pokemon.sprites.back} />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
