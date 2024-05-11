import { SettingsContainer } from "https://deno.land/x/ts_morph@20.0.0/ts_morph.js";
import { InputLanguage } from "../../models/InputLanguage.ts";
import { ActionCommand } from "../../models/MovementsModels.ts";
import { basicAttackRegex } from "../../shared/combo.ts";

export const basicAttackParser = (move: string) => {
  const basicAttacks: Set<ActionCommand>[] = [];
  const basicAttackIndexes: number[] = [];
  const basicAttack = move.match(basicAttackRegex);
  basicAttack?.forEach((attack, index) => {
    basicAttackIndexes.push(move.indexOf(attack));

    console.log(
      ` found basic attack: ${attack} at index  ${basicAttackIndexes[index]}`,
    );

    switch (attack) {
      case InputLanguage.LK.id:
        basicAttacks.push(new Set([ActionCommand.LK]));
        break;
      case InputLanguage.RK.id:
        basicAttacks.push(new Set([ActionCommand.RK]));
        break;
      case InputLanguage.LP.id:
        basicAttacks.push(new Set([ActionCommand.LP]));
        break;
      case InputLanguage.RP.id:
        basicAttacks.push(new Set([ActionCommand.RP]));
        break;
      default:
        console.warn(
          `unknown attack passed to basic attack parser:~~> ${attack}`,
        );
        break;
    }
  });

  return { basicAttacks, basicAttackIndexes };
};
