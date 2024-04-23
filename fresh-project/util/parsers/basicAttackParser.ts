import { basicAttackRegex } from "../../shared/combo.ts";

export const basicAttackParser = (move: string) => {
  const basicAttack = move.match(basicAttackRegex)![0];
  const basicAttackIndex = move.indexOf(basicAttack);
  console.log(
    ` found basic attack: ${basicAttack} at index  ${basicAttackIndex}`,
  );
  return { basicAttack, basicAttackIndex };
};
