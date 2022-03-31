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

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search search={search} onInput={handleSearchInput} />
      <br />
      <PokemonCollection pokemonList={pokemonDisplayList} />
    </Container>
  );
}

export default PokemonPage;
