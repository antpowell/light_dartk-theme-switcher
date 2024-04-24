import { basicMovementRegex } from "../../shared/combo.ts";

export const basicMovementParser = (move: string) => {
  // const basicMovement = move.match(basicMovementRegex)![0];
  // const basicMovementIndex = move.indexOf(basicMovement);
  // console.log(
  //   `found basic move: ${basicMovement} at index ${basicMovementIndex}`,
  // );
  // return { basicMovement, basicMovementIndex };
  const basicMovements: string[] = [];
  const basicMovementIndexes: number[] = [];
  const basicMovement = move.match(basicMovementRegex);
  basicMovement?.forEach((movement, index) => {
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
