import React from "react";
import { Pokemon } from "../models/PokemonTypes.ts";

export const PokemonStats = ({ pokemon }: { pokemon: Pokemon }) => {
  function getPokemonStats() {
    return pokemon.stats.map((stat) => {
      return (
        <>
          <b key={pokemon.id}>{stat.stat.name}</b>
          <div key={pokemon.id}>{stat.base_stat}</div>
        </>
      );
    });
  }
  return (
    <>
      <h2>Based Stats</h2>
      <div>
        {getPokemonStats()}
      </div>
    </>
  );
};
