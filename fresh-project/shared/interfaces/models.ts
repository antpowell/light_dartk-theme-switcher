import { Signal } from "@preact/signals";
import {
  ActionCommand,
  ActionCommandInputs,
  DirectionalCommand,
} from "../../models/MovementsModels.ts";

export type CommandMapType = {
  inputs: Array<InputLanguageCommandType>;
};

export type InputLanguageCommandType = {
  hold: boolean;
  command: DirectionalCommand | ActionCommand | Set<ActionCommand>;
};

export type CommandMapTypeSignal = {
  inputs: Signal<Array<InputLanguageCommandType>>;
};

export type InputLanguageCommandTypeSignal = {
  hold: Signal<boolean>;
  command: Signal<DirectionalCommand | ActionCommand>;
};
