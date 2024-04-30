import {
  ActionCommand,
  DirectionalCommand,
} from "../../models/MovementsModels.ts";

export type CommandMapType = {
  inputs: Array<InputLanguageCommandType>;
};

export type InputLanguageCommandType = {
  hold: boolean;
  command: DirectionalCommand | ActionCommand;
};
