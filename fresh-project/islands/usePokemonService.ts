import { useSignal } from "@preact/signals";
import { useEffect, useState } from "preact/hooks";

export const usePokemonService = ({ pokemonName }: { pokemonName: string }) => {
  const pokemon = useSignal<string | null>(null);
  const error = useSignal<Error | null>(null);

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon";

    async function callPokemonApi() {
      try {
        const response = await fetch(`${url}/${pokemonName}`);
        const results = await response.json();

        pokemon.value = results;
      } catch (e) {
        console.log(`callPokemonApi failed: ${e}`);
        error.value = e;
      }
    }

    callPokemonApi();

    return () => {
    };
  }, []);

  return [pokemon, error];
};
