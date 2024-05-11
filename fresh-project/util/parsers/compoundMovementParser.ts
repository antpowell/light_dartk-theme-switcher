import { InputLanguage } from "../../models/InputLanguage.ts";
import { CompoundDirectionalCommand } from "../../models/MovementsModels.ts";
import { compoundMovementRegex } from "../../shared/combo.ts";

export const compoundMovementParser = (move: string) => {
  const compoundMovements: CompoundDirectionalCommand[] = [];
  const compoundMovementIndex: number[] = [];
  const compoundMovement = move.match(compoundMovementRegex);

  compoundMovement?.forEach((movement, index) => {
    compoundMovementIndex.push(move.indexOf(movement));
    console.log(
      `found compound move: ${compoundMovements} at index ${compoundMovementIndex}`,
    );

    switch (movement) {
      case InputLanguage.DOWN_BACK.id:
        compoundMovements.push(CompoundDirectionalCommand.DOWN_BACK);
        break;
      case InputLanguage.DOWN_FORWARD.id:
        compoundMovements.push(CompoundDirectionalCommand.DOWN_FORWARD);
        break;
      case InputLanguage.UP_BACK.id:
        compoundMovements.push(CompoundDirectionalCommand.UP_BACK);
        break;
      case InputLanguage.UP_FORWARD.id:
        compoundMovements.push(CompoundDirectionalCommand.UP_FORWARD);
        break;
      case InputLanguage.DOWN_BACK_HOLD.id:
        compoundMovements.push(CompoundDirectionalCommand.DOWN_BACK_HOLD);
        break;
      case InputLanguage.DOWN_FORWARD_HOLD.id:
        compoundMovements.push(CompoundDirectionalCommand.DOWN_FORWARD_HOLD);
        break;
      case InputLanguage.UP_BACK_HOLD.id:
        compoundMovements.push(CompoundDirectionalCommand.UP_BACK_HOLD);
        break;
      case InputLanguage.UP_FORWARD_HOLD.id:
        compoundMovements.push(CompoundDirectionalCommand.UP_FORWARD_HOLD);
        break;
      default:
        console.warn(
          `unknown compound movement passed to compound movement parser:~~> ${movement}`,
        );
        break;
    }
  });
  return { compoundMovements, compoundMovementIndex };
};
