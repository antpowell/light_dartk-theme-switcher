import { signal } from "@preact/signals";
import type { JSX } from "preact";
import { InputIsland } from "../islands/InputIsland.tsx";

export const comboInputState = signal("");

export const ComboInput = () => {
  return (
    <div className="flex flex-col justify-center items-center p-8 ">
      <InputIsland label="Combo" name="combo" />
    </div>
  );
};
