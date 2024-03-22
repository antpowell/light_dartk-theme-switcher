import { signal } from "@preact/signals";
import type { JSX } from "preact";
import { InputIsland } from "../islands/InputIsland.tsx";

export const comboInputState = signal("");

export const ComboInput = () => {
  return <InputIsland label="Combo" name="combo" />;
};
