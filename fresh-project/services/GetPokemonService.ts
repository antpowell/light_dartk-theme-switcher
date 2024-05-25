import { computed, effect, signal } from "@preact/signals";
import { Pokemon } from "../models/PokemonModel.ts";
import { pokemonToLookup } from "../islands/PokemonSearchBar.tsx";

const url = "https://pokeapi.co/api/v2/pokemon";

let url_with_name = computed(
  () => `${url}/${pokemonToLookup.value.toLocaleLowerCase()}`,
);

export const pokemon = signal<Pokemon>(await fetchData({ init: true }));

effect(() => {
  console.log(`url_with_name: ${url_with_name.value}`);
  url_with_name = computed(
    () => `${url}/${pokemonToLookup.value.toLocaleLowerCase()}`,
  );
  fetchData({ init: false });
});

async function fetchData({ init }: { init: boolean }) {
  console.log(`fetching Pokemon `);
  // const response = await fetch(`${url_with_name}`);
  // const results = await response.json();

  // console.log(`done fetching Pokemon`);

  // if (!init) {
  //   pokemon.value = results;
  // }

  // return results;
}
