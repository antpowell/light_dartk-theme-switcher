import React, { useEffect, useState } from "react";
import "./App.css";
import { PokemonCard } from "./components/PokemonCard/PokemonCard.tsx";
import { ThemeSelector } from "./components/themeSelector/ThemeSelector.tsx";

function App() {
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonSearch, setPokemonSearch] = useState(null);

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${
      pokemonSearch !== null ? pokemonSearch : "pikachu"
    }`;
    console.log(url);
    const getPokemon = async () => {
      try {
        const response = await fetch(url);
        const results = await response.json();

        setPokemonData(results);
      } catch (e) {
        console.log(`
        Error fetching from ${url}:
        Error message: ${e}
        `);
      }
    };

    getPokemon();
  }, [pokemonSearch]);

  return (
    <>
      <ThemeSelector />
      <h1>Sir and Daddy Pokemon Search</h1>
      {pokemonData
        ? (
          <PokemonCard
            key={pokemonData.id}
            pokemon={pokemonData}
            setPokemonSearch={setPokemonSearch}
          />
        )
        : <></>}
    </>
  );
}

export default App;
