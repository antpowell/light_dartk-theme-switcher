import React, { ChangeEventHandler, useEffect, useState } from "react";
import { Pokemon } from "../../models/PokemonTypes.ts";
import { PokemonImage } from "../PokemonImage.tsx";
import { PokemonStats } from "../PokemonStats.tsx";

import "./PokemonCard.css";

export const PokemonCard = (
  { pokemon, setPokemonSearch }: { pokemon: Pokemon; setPokemonSearch: any },
) => {
  const [search, setSearch] = useState("");

  function inputChangeHandler(value: string) {
    setSearch(value);
  }

  function findPokemonHandler() {
    if (search !== "") {
      setPokemonSearch(search.toLowerCase());
    }
  }

  return (
    <>
      <section id="pokemon-card-section">
        <h2>Pokemon look up</h2>
        <div id="input-group">
          <input
            type="text"
            value={search}
            onChange={(e) => inputChangeHandler(e.currentTarget.value)}
          />
          <button onClick={findPokemonHandler}>Find Pokemon</button>
        </div>
        <h2>
          {`${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.slice(1)}`}
        </h2>
        <PokemonImage pokemonSprites={pokemon.sprites} />
        <PokemonStats pokemon={pokemon} />
      </section>
    </>
  );
};
