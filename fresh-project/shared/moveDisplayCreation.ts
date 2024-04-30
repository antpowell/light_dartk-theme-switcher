import { InputLanguage } from "../models/InputLanguage.ts";
import { CommandMapType } from "./interfaces/models.ts";

const commandMap: CommandMapType = {
  inputs: [],
};

export const comboInputToComponentRouter = (command: string) => {
  console.log(`finding command for ${command}`);
  let hasMovement = true;
  switch (command) {
    case InputLanguage.DOWN_BACK.id:
      commandMap.inputs.push(InputLanguage.DOWN_BACK.component);
      break;
    case InputLanguage.DOWN_FORWARD.id:
      commandMap.inputs.push(InputLanguage.DOWN_FORWARD.component);
      break;
    case InputLanguage.UP_BACK.id:
      commandMap.inputs.push(InputLanguage.UP_BACK.component);
      break;
    case InputLanguage.UP_FORWARD.id:
      commandMap.inputs.push(InputLanguage.UP_FORWARD.component);
      break;
    case InputLanguage.BACK.id:
      commandMap.inputs.push(InputLanguage.BACK.component);
      break;
    case InputLanguage.DOWN.id:
      commandMap.inputs.push(InputLanguage.DOWN.component);
      break;
    case InputLanguage.FORWARD.id:
      commandMap.inputs.push(InputLanguage.FORWARD.component);
      break;
    case InputLanguage.UP.id:
      commandMap.inputs.push(InputLanguage.UP.component);
      break;
    case InputLanguage.LP.id:
      commandMap.inputs.push(InputLanguage.LP.component);
      break;
    case InputLanguage.RP.id:
      commandMap.inputs.push(InputLanguage.RP.component);
      break;
    case InputLanguage.LK.id:
      commandMap.inputs.push(InputLanguage.LK.component);
      break;
    case InputLanguage.RK.id:
      commandMap.inputs.push(InputLanguage.RK.component);
      break;
    case "Space":
    case "Enter":
    default:
      hasMovement = false;
  }
  console.table(commandMap);
  console.log(JSON.stringify(commandMap));

  return { hasMovement, commandMap };
};
