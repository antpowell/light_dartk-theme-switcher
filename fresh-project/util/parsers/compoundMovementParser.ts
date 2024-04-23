import { compoundMovementRegex } from "../../shared/combo.ts";

export const compoundMovementParser = (move: string) => {
  const compoundMovement = move.match(compoundMovementRegex)![0];
  const compoundMovementIndex = move.indexOf(compoundMovement);

  console.log(
    `found compound move: ${compoundMovement} at index ${compoundMovementIndex}`,
  );
  return { compoundMovement, compoundMovementIndex };
};
