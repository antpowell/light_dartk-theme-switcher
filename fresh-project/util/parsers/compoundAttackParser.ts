import { ActionCommand } from "../../models/MovementsModels.ts";
import { compoundAttackRegex } from "../../shared/combo.ts";

export const compoundAttackParser = (move: string) => {
  const compoundAttackMap = new Map();
  const compoundAttackSet = new Set<ActionCommand>();
  const compoundAttack = move.match(compoundAttackRegex)![0];

  compoundAttack.split("+").forEach((attack) => {
    compoundAttackSet.add(attack);
    compoundAttackMap.set(attack, move.indexOf(attack));
  });

  console.group("index of compound attack's individual moves:");
  console.table(compoundAttackMap);
  console.groupEnd();

  const compoundAttackIndex = move.indexOf(compoundAttack);
  console.log(
    `found compound attack: ${compoundAttack} at index ${compoundAttackIndex} with individual move indexes: ${
      JSON.stringify(compoundAttackMap, (key, value) => {
        if (value instanceof Map) {
          return Object.fromEntries(value);
        }
        return value;
      }, 2)
    }`,
  );
  return { compoundAttackSet, compoundAttackIndex };
};
