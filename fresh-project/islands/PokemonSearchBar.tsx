import { computed, signal } from "@preact/signals";

const pokemonSearchInputValue = signal("pikachu");
export const pokemonToLookup = signal(
  pokemonSearchInputValue.value.toLocaleLowerCase(),
);

export default function PokemonSearchBar() {
  return (
    <>
      <label
        for="pokemon-search"
        class="block text-sm font-medium leading-6 text-gray-900"
      >
        Search Pokemon
      </label>
      <div class="relative mt-2 rounded-md shadow-sm">
        <input
          type="text"
          name="pokemon-search"
          id="pokemon-search"
          class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={(e) => {
            pokemonSearchInputValue.value = e.currentTarget.value;
          }}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              console.log(
                `pokemonSearchInputValue: ${pokemonSearchInputValue.value}`,
              );
              pokemonToLookup.value = pokemonSearchInputValue.value
                .toLocaleLowerCase();
            }
          }}
          placeholder={pokemonSearchInputValue.value}
        />
      </div>
    </>
  );
}
