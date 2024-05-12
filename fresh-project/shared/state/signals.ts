import { Signal, signal } from "@preact/signals";
import {
  CommandMapTypeSignal,
  InputLanguageCommand,
} from "../interfaces/models.ts";

export const translatedCombo = signal<
  Record<number, InputLanguageCommand>
>({});

export const commandMapSignal: Signal<CommandMapTypeSignal> = signal({
  inputs: signal([]),
});
