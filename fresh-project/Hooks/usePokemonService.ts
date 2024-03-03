import { useEffect, useState } from "preact/hooks";

export const usePokemonService = ({ pokemonName }: { pokemonName: string }) => {
  const [pokemon, setPokemon] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon";

    async function callPokemonApi() {
      try {
        const response = await fetch(`${url}/${pokemonName}`);
        const results = await response.json();

        setPokemon(results);
      } catch (e) {
        console.log(`callPokemonApi failed: ${e}`);
        setError(e);
      }
    }

    callPokemonApi();

    return () => {
    };
  }, []);

  return [pokemon, error];
};
