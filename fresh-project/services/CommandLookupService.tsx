import { JSX } from "https://esm.sh/v128/preact@10.19.2/src/index.js";
import {
  DirectionalCommand,
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
  { command, hold }: DirectionalInput,
): JSX.Element {
  switch (command) {
    case DirectionalCommand.D:
      return <D hold={hold} />;
    case "F":
      return <F hold={hold} />;
    case "B":
      return <B hold={hold} />;
    case "U":
      return <Up hold={hold} />;
    case "DB":
      return <DB hold={hold} />;
    case "DF":
      return <DF hold={hold} />;
    case "UB":
      return <UB hold={hold} />;
    case "UF":
      return <UF hold={hold} />;
  }
  return <></>;
}

export function CommandLookUpService(
  { inputs }: DirectionalInputs,
): JSX.Element {
  const commandList: JSX.Element[] = [];
  inputs.forEach((input) => {
    commandList.push(getComponent(input));
  });

  return <>{commandList}</>;
}
