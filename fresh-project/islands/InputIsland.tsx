import { signal, useSignal } from "@preact/signals";
import { JSX } from "preact/jsx-runtime";

const inputState = signal("");

const handleInputChange = (
  event: JSX.TargetedEvent<HTMLInputElement, Event>,
) => {
  event.preventDefault();
  inputState.value = event.currentTarget.value;
};
const handleEnterKey = (event: JSX.TargetedKeyboardEvent<HTMLInputElement>) => {
  if (event.key === "Enter") {
    // trigger search
  }
};

export interface InputIslandProps {
  label: string;
  name?: string;
  type?: JSX.HTMLAttributes<HTMLInputElement>["type"];
  //   onChange: (event: JSX.TargetedEvent<HTMLInputElement, Event>) => void;
  //   onKeyUp: (event: JSX.TargetedEvent<HTMLInputElement, Event>) => void;
  placeholder?: string;
}

export const InputIsland = (
  { label, name, placeholder }: InputIslandProps,
) => {
  return (
    <>
      <label
        for={name}
        class="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div class="relative mt-2 rounded-md shadow-sm">
        <input
          type=""
          name={name}
          id={name}
          class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={handleInputChange}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              //   console.log(
              //     `pokemonSearchInputValue: ${pokemonSearchInputValue.value}`,
              //   );
              //   pokemonToLookup.value = pokemonSearchInputValue.value
              //     .toLocaleLowerCase();
            }
          }}
          placeholder={placeholder}
        />
      </div>
    </>
  );
};
