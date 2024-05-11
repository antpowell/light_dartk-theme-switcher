import { InputLanguage } from "../../models/InputLanguage.ts";
import { BasicDirectionalCommand } from "../../models/MovementsModels.ts";
import { basicMovementRegex } from "../../shared/combo.ts";

export const basicMovementParser = (move: string) => {
  const basicMovements: BasicDirectionalCommand[] = [];
  const basicMovementIndexes: number[] = [];
  const basicMovement = move.match(basicMovementRegex);
  basicMovement?.forEach((movement, index) => {
    basicMovementIndexes.push(move.indexOf(movement));

    console.log(
      ` found basic attack: ${movement} at index  ${
        basicMovementIndexes[index]
      }`,
    );

    switch (movement) {
      case InputLanguage.BACK.id:
        basicMovements.push(BasicDirectionalCommand.BACK);
        break;
      case InputLanguage.DOWN.id:
        basicMovements.push(BasicDirectionalCommand.DOWN);
        break;
      case InputLanguage.FORWARD.id:
        basicMovements.push(BasicDirectionalCommand.FORWARD);
        break;
      case InputLanguage.UP.id:
        basicMovements.push(BasicDirectionalCommand.UP);
        break;
      case InputLanguage.BACK_HOLD.id:
        basicMovements.push(BasicDirectionalCommand.BACK_HOLD);
        break;
      case InputLanguage.DOWN_HOLD.id:
        basicMovements.push(BasicDirectionalCommand.DOWN_HOLD);
        break;
      case InputLanguage.FORWARD_HOLD.id:
        basicMovements.push(BasicDirectionalCommand.FORWARD_HOLD);
        break;
      case InputLanguage.UP_HOLD.id:
        basicMovements.push(BasicDirectionalCommand.UP_HOLD);
        break;
      default:
        console.warn(
          `unknown movement passed to basic movement parser:~~> ${movement}`,
        );
        break;
    }
  });

  return { basicMovements, basicMovementIndexes };
};
