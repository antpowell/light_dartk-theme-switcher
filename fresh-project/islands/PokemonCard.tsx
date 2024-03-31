import { computed, effect, signal, useSignal } from "@preact/signals";
import { Pokemon } from "../models/PokemonModel.ts";
import { pokemon } from "../services/GetPokemonService.ts";
import { Type } from "../models/PokemonModel.ts";

function getPokemonTypes(pokemon: Pokemon) {
  const types: string[] = [];
  pokemon.types.map((type) => {
    types.push(type.type.name);
  });
  return types;
}
const pokemonTypes = computed<string[]>(() => (getPokemonTypes(pokemon.value)));
const cardBgColor = signal<string>(
  getPokemonTypeColors(pokemon.value.types),
);

function displayPokemonTypes(pokemon: Pokemon) {
  return pokemonTypes.value
    .map((type, index) => {
      return (
        <a class="text-base font-semibold text-gray-900">
          {type.charAt(0).toUpperCase() + type.slice(1)}
          {index < pokemonTypes.value.length - 1 ? "/" : ""}
        </a>
      );
    });
}

function getPokemonTypeColors(types: Type[]): string {
  const colors = new Map<string, string>([
    ["normal", "bg-gray-500"],
    ["fire", "bg-red-600"],
    ["water", "bg-blue-500"],
    ["electric", "bg-yellow-400"],
    ["grass", "bg-green-500"],
    ["ice", "bg-blue-300"],
    ["fighting", "bg-red-800"],
    ["poison", "bg-purple-600"],
    ["ground", "bg-yellow-600"],
    ["flying", "bg-purple-300"],
    ["psychic", "bg-pink-500"],
    ["bug", "bg-lime-600"],
    ["rock", "bg-yellow-700"],
    ["ghost", "bg-purple-700"],
    ["dragon", "bg-indigo-800"],
    ["dark", "bg-gray-800"],
    ["steel", "bg-gray-400"],
    ["fairy", "bg-pink-400"],
  ]);

  return colors.get(types[0].type.name) ?? "bg-transparent";
}

effect(() => {
  cardBgColor.value = getPokemonTypeColors(pokemon.value.types);
});

export default function PokemonCard() {
  return (
    <>
      <div class="group relative">
        <div
          class={`relative h-80 w-full overflow-hidden rounded-lg ${cardBgColor} sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64`}
        >
          <img
            src={pokemon.value.sprites.front_default}
            class="h-full w-full object-cover object-center"
          />
        </div>
        <h3 class="mt-6 text-sm text-gray-500">
          <a href="#">
            <span class="absolute inset-0"></span>
            {pokemon.value.name.charAt(0).toUpperCase() +
              pokemon.value.name.slice(1)}
          </a>
        </h3>

        {displayPokemonTypes(pokemon.value)}
      </div>
    </>
  );
}
