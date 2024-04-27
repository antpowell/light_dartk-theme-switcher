import { DirectionalCommand } from "../../models/MovementsModels.ts";

export type commandMapType = {
  input: Array<InputLanguageCommandType>;
};

export type InputLanguageCommandType = {
  hold: boolean;
  command: DirectionalCommand;
};
