import { Signal } from "@preact/signals";
import {
  ActionCommand,
  ActionCommandKeys,
  DirectionalCommand,
} from "../../models/MovementsModels.ts";
import { Command } from "../../models/MovementsModels.ts";

export type CommandMapType = {
  inputs: Array<InputLanguageCommandType | Set<ActionCommand>>;
};

export type InputLanguageCommand =
  | DirectionalCommand
  | ActionCommandKeys
  | Set<ActionCommand>;

export type InputLanguageCommandType = {
  hold: boolean;
  command: Command;
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
