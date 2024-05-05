import { Signal, signal } from "@preact/signals";
import { CommandMapType, CommandMapTypeSignal } from "../interfaces/models.ts";

export const translatedCombo = signal({});

export const commandMapSignal: Signal<CommandMapTypeSignal> = signal({
  inputs: signal([]),
});
