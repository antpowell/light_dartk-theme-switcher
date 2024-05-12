import { JSX } from "https://esm.sh/v128/preact@10.19.2/src/index.js";

export type CommandKeys = DirectionalCommandKeys | ActionCommandKeys;
export type Command = DirectionalCommand | ActionCommand;
// export interface Command extends DirectionalCommand;

export type DirectionalCommandKeys =
  | BasicDirectionalCommandKeys
  | CompoundDirectionalCommandKeys
  | SpecialCommandKeys;

export type DirectionalCommand =
  | BasicDirectionalCommand
  | CompoundDirectionalCommand
  | SpecialCommand;

export type SpecialCommandKeys = keyof typeof SpecialCommand;

export enum SpecialCommand {
  NEUTRAL = "n",
  NEUTRAL_HOLD = "N",
  WHILE_RAISING = "WR",
  COUNTER_HIT = "CH",
}

export type BasicDirectionalCommandKeys = keyof typeof BasicDirectionalCommand;

export enum BasicDirectionalCommand {
  DOWN = "d",
  FORWARD = "f",
  BACK = "b",
  UP = "u",
  DOWN_HOLD = "D",
  FORWARD_HOLD = "F",
  BACK_HOLD = "B",
  UP_HOLD = "U",
}

export type CompoundDirectionalCommandKeys =
  keyof typeof CompoundDirectionalCommand;

export enum CompoundDirectionalCommand {
  DOWN_BACK = "d/b",
  DOWN_FORWARD = "d/f",
  UP_BACK = "u/b",
  UP_FORWARD = "u/f",
  DOWN_BACK_HOLD = "D/B",
  DOWN_FORWARD_HOLD = "D/F",
  UP_BACK_HOLD = "U/B",
  UP_FORWARD_HOLD = "U/F",
}

export interface DirectionalCommandVariants {
  hold: boolean;
}

export type DirectionalInput =
  & Record<
    "command",
    Partial<CommandKeys>
  >
  & DirectionalCommandVariants;

export type DirectionalInputs = Record<
  "inputs",
  DirectionalInput[]
>;

export type ActionCommandKeys = keyof typeof ActionCommand;

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
  [key in DirectionalCommandKeys]: JSX.Element;
};
