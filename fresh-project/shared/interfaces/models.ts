import { Signal } from "@preact/signals";
import {
  ActionCommand,
  ActionCommandKeys,
  Command,
  DirectionalCommandKeys,
} from "../../models/MovementsModels.ts";
import { CommandKeys } from "../../models/MovementsModels.ts";
import { DirectionalCommand } from "../../models/MovementsModels.ts";

export type CommandMapType = {
  inputs: Array<InputLanguageCommandType | Set<InputLanguageCommandType>>;
};

export type InputLanguageCommand =
  | DirectionalCommand
  | ActionCommand
  | Set<ActionCommand>;

export type InputLanguageCommandKeys =
  | DirectionalCommandKeys
  | ActionCommandKeys
  | Set<ActionCommand>;

export type InputLanguageCommandType = {
  hold: boolean;
  command: InputLanguageCommand;
};

export type CommandMapTypeSignal = {
  inputs: Signal<
    Array<InputLanguageCommandType | Set<InputLanguageCommandType>>
  >;
};

export type InputLanguageCommandTypeSignal = {
  hold: Signal<boolean>;
  command: Signal<DirectionalCommandKeys | ActionCommand>;
};
