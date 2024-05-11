import { ActionCommand } from "../models/MovementsModels.ts";
import { Command } from "../models/MovementsModels.ts";
import {
  basicAttackRegex,
  basicMovementRegex,
  compoundAttackRegex,
  compoundMovementRegex,
} from "../shared/combo.ts";
import { InputLanguageCommand } from "../shared/interfaces/models.ts";

import { translatedCombo } from "../shared/state/signals.ts";
import { comboReducer } from "./comboReducer.ts";
import {
  basicAttackParser,
  basicMovementParser,
  compoundAttackParser,
  compoundMovementParser,
} from "./parsers/index.ts";

export const comboRouter = (move: string) => {
  console.log(`parsing move... ${move}`);
  translatedCombo.value = {};
  if (basicMovementRegex.test(move)) {
    const { basicMovements, basicMovementIndexes } = basicMovementParser(move);
    basicMovements.forEach((movement, index) => {
      comboReducer({ input: movement, index: basicMovementIndexes[index] });
    });
  }
  if (basicAttackRegex.test(move)) {
    const { basicAttacks, basicAttackIndexes } = basicAttackParser(move);
    basicAttacks.forEach((attack, index) => {
      comboReducer({ input: attack, index: basicAttackIndexes[index] });
    });
  }
  if (compoundMovementRegex.test(move)) {
    const { compoundMovements, compoundMovementIndex } = compoundMovementParser(
      move,
    );
    compoundMovements.forEach((movement, index) => {
      comboReducer({ input: movement, index: compoundMovementIndex[index] });
    });
  }
  if (compoundAttackRegex.test(move)) {
    const { compoundAttackSet, compoundAttackIndex } = compoundAttackParser(
      move,
    );
    comboReducer({ input: compoundAttackSet, index: compoundAttackIndex });
  }

  const commandList = Object.values<
    InputLanguageCommand
  >(
    translatedCombo.value,
  )
    .map((command) => command);

  console.group("commands successfully parsed:");
  console.table(commandList);
  console.groupEnd();

  return commandList;
};
