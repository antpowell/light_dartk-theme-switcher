import { InputLanguage } from "../models/InputLanguage.ts";
import { commandMapType } from "./interfaces/models.ts";

const commandMap: commandMapType = {
  input: [],
};

export const comboInputToComponentRouter = (command: string) => {
  console.log(`finding command for ${command}`);
  let hasMovement = true;
  switch (command) {
    case InputLanguage.DOWN_BACK.id:
      commandMap.input.push(InputLanguage.DOWN_BACK.component);
      break;
    case InputLanguage.DOWN_FORWARD.id:
      commandMap.input.push(InputLanguage.DOWN_FORWARD.component);
      break;
    case InputLanguage.UP_BACK.id:
      commandMap.input.push(InputLanguage.UP_BACK.component);
      break;
    case InputLanguage.UP_FORWARD.id:
      commandMap.input.push(InputLanguage.UP_FORWARD.component);
      break;
    case InputLanguage.BACK.id:
      commandMap.input.push(InputLanguage.BACK.component);
      break;
    case InputLanguage.DOWN.id:
      commandMap.input.push(InputLanguage.DOWN.component);
      break;
    case InputLanguage.FORWARD.id:
      commandMap.input.push(InputLanguage.FORWARD.component);
      break;
    case InputLanguage.UP.id:
      commandMap.input.push(InputLanguage.UP.component);
      break;
    // case "+":
    case InputLanguage.LP.id:
      commandMap.input.push(InputLanguage.LP.component);
      break;
    case InputLanguage.RP.id:
      commandMap.input.push(InputLanguage.RP.component);
      break;
    case InputLanguage.LK.id:
      commandMap.input.push(InputLanguage.LK.component);
      break;
    case InputLanguage.RK.id:
      commandMap.input.push(InputLanguage.RK.component);
      break;
    case "Space":
    case "Enter":
    default:
      hasMovement = false;
  }
  console.table(commandMap);

  return { hasMovement, commandMap };
};
