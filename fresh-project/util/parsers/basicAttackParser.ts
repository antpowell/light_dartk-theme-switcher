import { basicAttackRegex } from "../../shared/combo.ts";

export const basicAttackParser = (move: string) => {
  const basicAttacks: string[] = [];
  const basicAttackIndexes: number[] = [];
  const basicAttack = move.match(basicAttackRegex);
  basicAttack?.forEach((attack, index) => {
    basicAttacks.push(attack);
    basicAttackIndexes.push(move.indexOf(attack));

    console.log(
      ` found basic attack: ${attack} at index  ${basicAttackIndexes[index]}`,
    );
  });

  return { basicAttacks, basicAttackIndexes };
};
