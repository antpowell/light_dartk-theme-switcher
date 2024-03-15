import { JSX } from "https://esm.sh/v128/preact@10.19.2/src/index.js";

export type Command = DirectionalCommand & ActionCommand;

export enum DirectionalCommand {
  D = "D",
  F = "F",
  B = "B",
  U = "U",
  DB = "DB",
  DF = "DF",
  UB = "UB",
  UF = "UF",
}

export interface DirectionalCommandVariants {
  hold: boolean;
}

export interface DirectionalInput extends DirectionalCommandVariants {
  command: DirectionalCommand;
}

export interface DirectionalInputs {
  inputs: Set<DirectionalInput>;
}

export enum ActionCommand {
  One = "1",
  Two = "2",
  Three = "3",
  Four = "4",
}

export interface ActionCommandInputs {
  inputs: Set<ActionCommand>;
}

export type DirectionalCommandLookup = {
  [key in DirectionalCommand]: JSX.Element;
};
