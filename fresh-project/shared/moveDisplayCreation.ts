import { InputLanguage } from "../models/InputLanguage.ts";
import { ActionCommand } from "../models/MovementsModels.ts";
import { CommandMapType, InputLanguageCommand } from "./interfaces/models.ts";
import { commandMapSignal } from "./state/signals.ts";

const commandMap: CommandMapType = {
  inputs: [],
};

export const comboInputToComponentRouter = (command: InputLanguageCommand) => {
  console.log(`finding command for ${command}`);
  let hasMovement = true;

  if (command instanceof Set) {
    const componentSet = new Set<ActionCommand>();
    // const componentSet: InputLanguageCommandType[] = [];
    command.forEach((input) => {
      switch (input) {
        case InputLanguage.LP.id:
          componentSet.add(InputLanguage.LP.component);
          // componentSet.push(InputLanguage.LP.component);
          // commandMap.inputs.push(InputLanguage.LP.component);
          // commandMapSignal.value.inputs.value.push(InputLanguage.LP.component);
          break;
        case InputLanguage.RP.id:
          componentSet.add(InputLanguage.RP.component);
          // componentSet.push(InputLanguage.RP.component);
          // commandMap.inputs.push(InputLanguage.RP.component);
          // commandMapSignal.value.inputs.value.push(InputLanguage.RP.component);
          break;
        case InputLanguage.LK.id:
          componentSet.add(InputLanguage.LK.component);
          // componentSet.push(InputLanguage.LK.component);
          // commandMap.inputs.push(InputLanguage.LK.component);
          // commandMapSignal.value.inputs.value.push(InputLanguage.LK.component);
          break;
        case InputLanguage.RK.id:
          componentSet.add(InputLanguage.RK.component);
          // componentSet.push(InputLanguage.RK.component);
          // commandMap.inputs.push(InputLanguage.RK.component);
          // commandMapSignal.value.inputs.value.push(InputLanguage.RK.component);
          break;
        default:
          hasMovement = false;
      }
    });

    commandMapSignal.value.inputs.value = [
      ...commandMapSignal.value.inputs.value,
      componentSet,
    ];
  }

  switch (command) {
    case InputLanguage.DOWN_BACK.id:
      commandMap.inputs.push(InputLanguage.DOWN_BACK.component);
      commandMapSignal.value.inputs.value.push(
        InputLanguage
          .DOWN_BACK.component,
      );
      break;
    case InputLanguage.DOWN_FORWARD.id:
      commandMap.inputs.push(InputLanguage.DOWN_FORWARD.component);
      commandMapSignal.value.inputs.value.push(
        InputLanguage.DOWN_FORWARD.component,
      );
      break;
    case InputLanguage.UP_BACK.id:
      commandMap.inputs.push(InputLanguage.UP_BACK.component);
      commandMapSignal.value.inputs.value.push(InputLanguage.UP_BACK.component);
      break;
    case InputLanguage.UP_FORWARD.id:
      commandMap.inputs.push(InputLanguage.UP_FORWARD.component);
      commandMapSignal.value.inputs.value.push(
        InputLanguage.UP_FORWARD.component,
      );
      break;
    case InputLanguage.BACK.id:
      commandMap.inputs.push(InputLanguage.BACK.component);
      commandMapSignal.value.inputs.value.push(InputLanguage.BACK.component);
      break;
    case InputLanguage.DOWN.id:
      commandMap.inputs.push(InputLanguage.DOWN.component);
      commandMapSignal.value.inputs.value.push(InputLanguage.DOWN.component);
      break;
    case InputLanguage.FORWARD.id:
      commandMap.inputs.push(InputLanguage.FORWARD.component);
      commandMapSignal.value.inputs.value.push(InputLanguage.FORWARD.component);
      break;
    case InputLanguage.UP.id:
      commandMap.inputs.push(InputLanguage.UP.component);
      commandMapSignal.value.inputs.value.push(InputLanguage.UP.component);
      break;
    case InputLanguage.LP.id:
      commandMap.inputs.push(InputLanguage.LP.component);
      commandMapSignal.value.inputs.value.push(InputLanguage.LP.component);
      break;
    case InputLanguage.RP.id:
      commandMap.inputs.push(InputLanguage.RP.component);
      commandMapSignal.value.inputs.value.push(InputLanguage.RP.component);
      break;
    case InputLanguage.LK.id:
      commandMap.inputs.push(InputLanguage.LK.component);
      commandMapSignal.value.inputs.value.push(InputLanguage.LK.component);
      break;
    case InputLanguage.RK.id:
      commandMap.inputs.push(InputLanguage.RK.component);
      commandMapSignal.value.inputs.value.push(InputLanguage.RK.component);
      break;
    default:
      hasMovement = false;
  }
  console.log("🚀 ~ comboInputToComponentRouter ~ commandMap:", commandMap);
  console.log("🚀 ~ comboInputToComponentRouter ~ commandMap:", commandMap);
  console.table(commandMap);

  return { hasMovement, commandMap };
};
