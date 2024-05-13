import { InputLanguage } from "../models/InputLanguage.ts";
import { ActionCommand } from "../models/MovementsModels.ts";
import { CommandMapType, InputLanguageCommand } from "./interfaces/models.ts";
import { commandMapSignal } from "./state/signals.ts";

const commandMap: CommandMapType = {
  inputs: [],
};

export const comboInputToComponentRouter = (
  command: InputLanguageCommand,
) => {
  console.log(`finding command for ${command}`);
  let hasMovement = true;

  if (command instanceof Set) {
    const commandSet = new Set<ActionCommand>();
    command.forEach((input) => {
      switch (input) {
        case InputLanguage.LP.id:
          commandSet.add(ActionCommand.LP);
          break;
        case InputLanguage.RP.id:
          commandSet.add(ActionCommand.RP);
          break;
        case InputLanguage.LK.id:
          commandSet.add(ActionCommand.LK);
          break;
        case InputLanguage.RK.id:
          commandSet.add(ActionCommand.RK);
          break;
        default:
          hasMovement = false;
      }
    });
    commandMapSignal.value.inputs.value = [
      ...commandMapSignal.value.inputs.value,
      {
        hold: false,
        command: commandSet,
      },
    ];
  } else {
    switch (command) {
      case InputLanguage.DOWN_BACK.id:
        commandMapSignal.value.inputs.value.push(
          InputLanguage
            .DOWN_BACK.component,
        );
        break;
      case InputLanguage.DOWN_FORWARD.id:
        commandMapSignal.value.inputs.value.push(
          InputLanguage.DOWN_FORWARD.component,
        );
        break;
      case InputLanguage.UP_BACK.id:
        commandMapSignal.value.inputs.value.push(
          InputLanguage.UP_BACK.component,
        );
        break;
      case InputLanguage.UP_FORWARD.id:
        commandMapSignal.value.inputs.value.push(
          InputLanguage.UP_FORWARD.component,
        );
        break;
      case InputLanguage.BACK.id:
        commandMapSignal.value.inputs.value.push(InputLanguage.BACK.component);
        break;
      case InputLanguage.DOWN.id:
        commandMapSignal.value.inputs.value.push(InputLanguage.DOWN.component);
        break;
      case InputLanguage.FORWARD.id:
        commandMapSignal.value.inputs.value.push(
          InputLanguage.FORWARD.component,
        );
        break;
      case InputLanguage.UP.id:
        commandMapSignal.value.inputs.value.push(InputLanguage.UP.component);
        break;
      case InputLanguage.LP.id:
        commandMapSignal.value.inputs.value.push(InputLanguage.LP.component);
        break;
      case InputLanguage.RP.id:
        commandMapSignal.value.inputs.value.push(InputLanguage.RP.component);
        break;
      case InputLanguage.LK.id:
        commandMapSignal.value.inputs.value.push(InputLanguage.LK.component);
        break;
      case InputLanguage.RK.id:
        commandMapSignal.value.inputs.value.push(InputLanguage.RK.component);
        break;
      default:
        hasMovement = false;
    }
  }

  return { hasMovement, commandMap };
};
