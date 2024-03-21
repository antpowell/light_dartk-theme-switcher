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
  N,
  UB,
  UF,
  Up,
} from "../islands/MovementInputs/index.ts";
import { DirectionalInput } from "../models/MovementsModels.ts";
import { signal } from "@preact/signals";

type getComponentProps = {
  key: number;
} & DirectionalInput;

function getComponent(
  { command, hold, key }: getComponentProps,
): JSX.Element {
  switch (command) {
    case "D":
      return <D key={key} hold={hold} />;
    case "F":
      return <F key={key} hold={hold} />;
    case "B":
      return <B key={key} hold={hold} />;
    case "U":
      return <Up key={key} hold={hold} />;
    case "DB":
      return <DB key={key} hold={hold} />;
    case "DF":
      return <DF key={key} hold={hold} />;
    case "UB":
      return <UB key={key} hold={hold} />;
    case "UF":
      return <UF key={key} hold={hold} />;
    case "N":
      return <N key={key} hold={hold} />;
  }
  return <></>;
}

export function CommandLookUpService(
  { inputs }: DirectionalInputs,
): JSX.Element {
  // const commandList = signal<JSX.Element[]>([]);
  // const commandList: JSX.Element[] = [];

  // inputs.map(({ command, hold }, index) => {
  //   // console.log(`working with input ${JSON.stringify(input, null, 2)}`);
  //   commandList.push(getComponent({ command, hold, key: index }));
  // });
  const commandList = inputs.map(({ command, hold }, index) =>
    getComponent({ command, hold, key: index })
  );

  // commandList.forEach((command) =>
  //   // console.log(`command in commandList: ${JSON.stringify(command, null, 2)}`)
  // );

  return <>{commandList}</>;
}
