import { signal } from "@preact/signals";
import { commandMapType } from "../interfaces/models.ts";

export const translatedCombo = signal({});

export const commandMapSignal = signal<commandMapType>({
  input: [],
});
