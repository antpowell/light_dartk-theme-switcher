import React from "react";
import { Sprites } from "../models/PokemonTypes.ts";

export const PokemonImage = (
  { pokemonSprites }: { pokemonSprites: Sprites },
) => {
  return (
    <>
      <img src={pokemonSprites.front_shiny} alt="" width={300} height={300} />
      {pokemonSprites.animated
        ? <img src={pokemonSprites.animated.front_default} />
        : <></>}
      {
        /* <div>{JSON.stringify(pokemonSprites.animated)}</div>
      <div>{pokemonSprites.animated?.front_default}</div> */
      }
    </>
  );
};
