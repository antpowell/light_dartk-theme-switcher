import { basicMovementRegex } from "../../shared/combo.ts";

export const basicMovementParser = (move: string) => {
  const basicMovement = move.match(basicMovementRegex)![0];
  const basicMovementIndex = move.indexOf(basicMovement);
  console.log(
    `found basic move: ${basicMovement} at index ${basicMovementIndex}`,
  );
  return { basicMovement, basicMovementIndex };
};
