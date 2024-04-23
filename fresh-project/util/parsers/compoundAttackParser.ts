import { compoundAttackRegex } from "../../shared/combo.ts";

export const compoundAttackParser = (move: string) => {
  const compoundAttack = move.match(compoundAttackRegex)![0];
  const compoundAttackIndex = move.indexOf(compoundAttack);
  console.log(
    `found compound attack: ${compoundAttack} at index ${compoundAttackIndex}`,
  );
  return { compoundAttack, compoundAttackIndex };
};
