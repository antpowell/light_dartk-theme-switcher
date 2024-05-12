import { Signal, signal } from "@preact/signals";
import {
  CommandMapTypeSignal,
  InputLanguageCommandKeys,
} from "../interfaces/models.ts";

export const translatedCombo = signal<
  Record<number, InputLanguageCommandKeys>
>({});

export const commandMapSignal: Signal<CommandMapTypeSignal> = signal({
  inputs: signal([]),
});
