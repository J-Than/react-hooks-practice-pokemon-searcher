import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onSubmitNewPokemon }) {

  const [newPokemon, setNewPokemon] = useState({
    name: "",
    hp: "",
    sprites: {
      front: "",
      back: ""
    }
  })

  function handleInput(e) {

    if (e.target.placeholder === "url") {
      setNewPokemon(newPokemon => newPokemon = {...newPokemon, sprites: {...newPokemon.sprites, [e.target.name]: e.target.value}})
    } else {
      setNewPokemon(newPokemon => newPokemon = {...newPokemon, [e.target.name]: e.target.value})
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmitNewPokemon(newPokemon);
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            placeholder="Name"
            name="name"
            value={newPokemon ? newPokemon.name : null}
            onChange={handleInput}
          />
          <Form.Input
            fluid
            label="hp"
            placeholder="hp"
            type="number"
            name="hp"
            value={newPokemon ? newPokemon.hp : null}
            onChange={handleInput}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="front"
            value={newPokemon ? newPokemon.sprites.front : null}
            onChange={handleInput}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="back"
            value={newPokemon ? newPokemon.sprites.back : null}
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
