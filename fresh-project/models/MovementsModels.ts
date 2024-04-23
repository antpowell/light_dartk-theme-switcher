import { JSX } from "https://esm.sh/v128/preact@10.19.2/src/index.js";

export type Command = DirectionalCommand & ActionCommand;
// export interface Command extends DirectionalCommand;

export enum DirectionalCommand {
  DOWN = "d",
  FORWARD = "f",
  BACK = "b",
  UP = "u",
  DOWN_BACK = "d/b",
  DOWN_FORWARD = "d/f",
  UP_BACK = "u/b",
  UP_FORWARD = "u/f",
  NEUTRAL = "n",
  DOWN_HOLD = "D",
  FORWARD_HOLD = "F",
  BACK_HOLD = "B",
  UP_HOLD = "U",
  DOWN_BACK_HOLD = "D/B",
  DOWN_FORWARD_HOLD = "D/F",
  UP_BACK_HOLD = "U/B",
  UP_FORWARD_HOLD = "U/F",
  NEUTRAL_HOLD = "N",
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
  LP = "1",
  RP = "2",
  LK = "3",
  RK = "4",
}

export interface ActionCommandInputs {
  inputs: Set<ActionCommand>;
}

export type DirectionalCommandLookup = {
  [key in DirectionalCommand]: JSX.Element;
};
