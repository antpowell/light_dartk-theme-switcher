import { signal } from "@preact/signals";
import { CommandMapType } from "../interfaces/models.ts";

export const translatedCombo = signal({});

export const commandMapSignal = signal<CommandMapType>({
  inputs: [],
});
