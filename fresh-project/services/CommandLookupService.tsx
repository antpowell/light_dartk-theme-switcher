import { JSX } from "https://esm.sh/v128/preact@10.19.2/src/index.js";
import {
  DirectionalCommand,
  DirectionalCommandVariants,
  DirectionalInputs,
} from "../models/MovementsModels.ts";
import {
  B,
  D,
  DB,
  DF,
  F,
  UB,
  UF,
  Up,
} from "../islands/CommandInputs/MovementInputs/index.ts";
import { DirectionalInput } from "../models/MovementsModels.ts";

function getComponent(
  [command, variants]: [string, DirectionalCommandVariants],
): JSX.Element {
  switch (command) {
    case DirectionalCommand.D:
      return <D hold={variants.hold} />;
    case "F":
      return <F hold={variants.hold} />;
    case "B":
      return <B hold={variants.hold} />;
    case "U":
      return <Up hold={variants.hold} />;
    case "DB":
      return <DB hold={variants.hold} />;
    case "DF":
      return <DF hold={variants.hold} />;
    case "UB":
      return <UB hold={variants.hold} />;
    case "UF":
      return <UF hold={variants.hold} />;
  }
  return <></>;
}

export function CommandLookUpService(
  { inputs }: DirectionalInputs,
): JSX.Element {
  const commandList: JSX.Element[] = [];
  Object.entries(inputs).forEach((input) =>
    commandList.push(getComponent(input))
  );

  return <>{commandList}</>;
}
