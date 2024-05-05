import { DirectionalCommand } from "../../models/MovementsModels.ts";
import { basicMovementRegex } from "../../shared/combo.ts";

export const basicMovementParser = (move: string) => {
  const basicMovements: DirectionalCommand[] = [];
  const basicMovementIndexes: number[] = [];
  const basicMovement = move.match(basicMovementRegex);
  basicMovement?.forEach((movement, index) => {
    switch (movement) {
      case "u":
        basicMovements.push(DirectionalCommand.UP);
        break;
      case "d":
        basicMovements.push(DirectionalCommand.DOWN);
        break;
      case "b":
        basicMovements.push(DirectionalCommand.BACK);
        break;
      case "f":
        basicMovements.push(DirectionalCommand.FORWARD);
        break;
      case "n":
        basicMovements.push(DirectionalCommand.NEUTRAL);
        break;
      default:
        break;
    }
    basicMovements.push(movement);
    basicMovementIndexes.push(move.indexOf(movement));

    console.log(
      ` found basic attack: ${movement} at index  ${
        basicMovementIndexes[index]
      }`,
    );
  });

  return { basicMovements, basicMovementIndexes };
};
