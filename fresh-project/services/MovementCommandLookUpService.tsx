import { JSX } from "https://esm.sh/v128/preact@10.19.2/src/index.js";
import { AttackInputs } from "../islands/CommandInputs/AttackInputs.tsx";
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
import {
  CommandMapType,
  InputLanguageCommandType,
} from "../shared/interfaces/models.ts";
import { ActionCommand } from "../models/MovementsModels.ts";

type getComponentProps = {
  key: number;
} & InputLanguageCommandType;

function getComponent(
  { command, hold, key }: getComponentProps,
): JSX.Element {
  if (command instanceof Set) {
    return <AttackInputs key={key} attacks={command} />;
  }
  switch (command) {
    case "d":
      return <D key={key} hold={false} />;
      return (
        <div className={"h-96 "}>
          <D key={key} hold={false} />
        </div>
      );
    case "f":
      return <F key={key} hold={false} />;
    case "b":
      return <B key={key} hold={false} />;
    case "u":
      return <Up key={key} hold={false} />;
    case "d/b":
      return <DB key={key} hold={false} />;
    case "d/f":
      return <DF key={key} hold={false} />;
    case "u/b":
      return <UB key={key} hold={false} />;
    case "u/f":
      return <UF key={key} hold={false} />;
    case "n":
      return <N key={key} hold={false} />;
    case "D":
      return <D key={key} hold={true} />;
    case "F":
      return <F key={key} hold={true} />;
    case "B":
      return <B key={key} hold={true} />;
    case "U":
      return <Up key={key} hold={true} />;
    case "D/B":
      return <DB key={key} hold={true} />;
    case "D/F":
      return <DF key={key} hold={true} />;
    case "U/B":
      return <UB key={key} hold={true} />;
    case "U/F":
      return <UF key={key} hold={true} />;
    case "N":
      return <N key={key} hold={true} />;
    case "1":
      return <AttackInputs key={key} attacks={new Set([command])} />;
    case "2":
      return <AttackInputs key={key} attacks={new Set([command])} />;
    case "3":
      return <AttackInputs key={key} attacks={new Set([command])} />;
    case "4":
      return <AttackInputs key={key} attacks={new Set([command])} />;
  }
  return <></>;
}

export function CommandLookUpService(
  { inputs }: CommandMapType,
): JSX.Element {
  const componentGroup: JSX.Element[] = [];

  inputs.map((input, index) => {
    componentGroup.push(getComponent({
      command: input.command,
      hold: input.hold,
      key: index,
    }));
  });
  return (
    <>
      {componentGroup}
    </>
  );
}
