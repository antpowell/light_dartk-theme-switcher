import { signal } from "@preact/signals";

interface GetPokemonServiceProps {
  pokemonName: string;
}

export function getPokemonService({ pokemonName }: GetPokemonServiceProps) {
  const url = "https://pokeapi.co/api/v2/pokemon";
  const pokemon = signal({});

  async function fetchData() {
    console.log(`fetching Pokemon ${pokemonName}`);
    const response = await fetch(`${url}/${pokemonName}`);
    const results = await response.json();

    pokemon.value = results;
    console.log(`done fetching Pokemon ${pokemonName}`);
    console.log(JSON.stringify(pokemon.value));
  }

  fetchData();

  return pokemon;
}
