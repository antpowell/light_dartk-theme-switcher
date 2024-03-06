export type Command = DirectionalCommand & ActionCommand;

export type DirectionalCommand =
  | "D"
  | "F"
  | "B"
  | "U"
  | "DB"
  | "DF"
  | "UB"
  | "UF";

export interface DirectionalCommandVariants {
  hold: boolean;
}

export interface DirectionalInput extends DirectionalCommandVariants {
  command: DirectionalCommand;
}

export interface DirectionalInputs {
  inputs: Set<DirectionalInput>;
}

export type ActionCommand = "1" | "2" | "3" | "4";

export interface ActionCommandInputs {
  inputs: Set<ActionCommand>;
}
