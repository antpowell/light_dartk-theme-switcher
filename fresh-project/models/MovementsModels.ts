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
  N = "N",
}

export interface DirectionalCommandVariants {
  hold: boolean;
}

export type DirectionalInput =
  & Record<
    "command",
    Partial<DirectionalCommand>
  >
  & DirectionalCommandVariants;

/* The `DirectionalInputs` interface is defining a type that represents a collection of directional inputs. It has a
property named `inputs` which is a record where the keys are `DirectionalCommand` enum values and the values are objects
of type `DirectionalCommandVariants`. This structure allows you to map each `DirectionalCommand` to its corresponding
`DirectionalCommandVariants` object, providing a way to store and access information about different directional
commands in a structured manner. */
export type DirectionalInputs = Record<
  "inputs",
  DirectionalInput[]
>;

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
