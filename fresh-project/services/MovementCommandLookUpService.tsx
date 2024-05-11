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
    return <AttackInputs key={key} inputs={command} />;
  }
  switch (command) {
    case "D":
      return <D key={key} hold={hold} />;
    case "F":
      return <F key={key} hold={hold} />;
    case "B":
      return <B key={key} hold={hold} />;
    case "U":
      return <Up key={key} hold={hold} />;
    case "D/B":
      return <DB key={key} hold={hold} />;
    case "D/F":
      return <DF key={key} hold={hold} />;
    case "U/B":
      return <UB key={key} hold={hold} />;
    case "U/F":
      return <UF key={key} hold={hold} />;
    case "N":
      return <N key={key} hold={hold} />;
    case "1":
      return <AttackInputs key={key} inputs={new Set([command])} />;
    case "2":
      return <AttackInputs key={key} inputs={new Set([command])} />;
    case "3":
      return <AttackInputs key={key} inputs={new Set([command])} />;
    case "4":
      return <AttackInputs key={key} inputs={new Set([command])} />;
      // case "1+2":
      // case "1+3":
      // case "1+4":
      // case "2+3":
      // case "2+4":
      // case "3+4":
      // case "1+2+3":
      // case "1+2+4":
      // case "1+3+4":
      // case "2+3+4":
      // case "1+2+3+4":
      return <>Compound Attack</>;
  }
  return <></>;
}

export function CommandLookUpService(
  { inputs }: CommandMapType,
): JSX.Element {
  const componentGroup: JSX.Element[] = [];
  // const commandList = signal<JSX.Element[]>([]);
  // const commandList: JSX.Element[] = [];

  // inputs.map(({ command, hold }, index) => {
  //   // console.log(`working with input ${JSON.stringify(input, null, 2)}`);
  //   commandList.push(getComponent({ command, hold, key: index }));
  // });

  // const computedComponents = computed(() => {
  //   return commandMapSignal.value.inputs.value.map(({ command, hold }, index) =>
  //     getComponent({ command, hold, key: index })
  //   );
  // });

  // const commandList = inputs.map(({ command, hold }, index) =>
  //   getComponent({ command, hold, key: index })
  // );

  // commandList.forEach((command) =>
  //   // console.log(`command in commandList: ${JSON.stringify(command, null, 2)}`)
  // );

  inputs.map((input, index) => {
    if (input instanceof Set) {
      // TODO: is Set<InputLanguageCommandType> the same as Set<ActionCommand>???
      componentGroup.push(
        <AttackInputs
          key={index}
          inputs={input as unknown as Set<ActionCommand>}
        />,
      );
      // return (
      //   <AttackInputs
      //     key={index}
      //     inputs={input as unknown as Set<ActionCommand>}
      //   />
      // );
    } else {
      componentGroup.push(getComponent({
        command: input.command,
        hold: input.hold,
        key: index,
      }));
      // return getComponent({
      //   command: input.command,
      //   hold: input.hold,
      //   key: index,
      // });
    }
  });
  return <>{componentGroup}</>;
}
