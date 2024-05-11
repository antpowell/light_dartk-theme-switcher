import { Signal } from "@preact/signals";
import {
  ActionCommand,
  DirectionalCommand,
} from "../../models/MovementsModels.ts";

export type CommandMapType = {
  inputs: Array<InputLanguageCommandType | Set<ActionCommand>>;
};

export type InputLanguageCommand =
  | DirectionalCommand
  | ActionCommand
  | Set<ActionCommand>;

export type InputLanguageCommandType = {
  hold: boolean;
  command: InputLanguageCommand;
};

export type CommandMapTypeSignal = {
  inputs: Signal<
    Array<InputLanguageCommandType | Set<ActionCommand>>
  >;
};

export type InputLanguageCommandTypeSignal = {
  hold: Signal<boolean>;
  command: Signal<DirectionalCommand | ActionCommand>;
};
