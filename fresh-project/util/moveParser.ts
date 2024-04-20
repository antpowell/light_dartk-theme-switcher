import { basicMovementRegex, compoundAttackRegex } from "../shared/combo.ts";

const moveMap = new Map();

export const moveParser = (combo: string) => {
  console.log("parsing combo...");

  combo.split(",").forEach((move, index) => {
    console.log(index, move);
    console.log(combo, compoundAttackRegex.exec(move.toLocaleLowerCase()));
    console.log(combo, basicMovementRegex.exec(move.toLocaleLowerCase()));

    console.log(index, compoundAttackRegex.exec(move));
  });
};
