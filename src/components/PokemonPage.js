import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokemonList, setPokemonList] = useState([]);
  const [search, setSearch] = useState("");
  const [pokemonDisplayList, setPokemonDisplayList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(r => r.json())
    .then(data => {setPokemonList(data); setPokemonDisplayList(data)})
  }, [])

  function handleSearchInput(input) {
    setSearch(search => search = input);
    setPokemonDisplayList(pokemonDisplayList =>
      pokemonDisplayList = pokemonList.filter(pokemon =>
        pokemon.name.toLowerCase().includes(input.toLowerCase())))
  }

  function handleSubmitNewPokemon(newPokemon) {
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({...newPokemon, hp: parseInt(newPokemon.hp)})
    })
    .then(r => r.json())
    .then(data => {
      setPokemonList(pokemonList => [...pokemonList, data]);
      setPokemonDisplayList(pokemonDisplayList => [...pokemonDisplayList, data])
    })
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onSubmitNewPokemon={handleSubmitNewPokemon} />
      <br />
      <Search search={search} onInput={handleSearchInput} />
      <br />
      <PokemonCollection pokemonList={pokemonDisplayList} />
    </Container>
  );
}

export default PokemonPage;
