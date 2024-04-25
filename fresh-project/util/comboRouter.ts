import {
  basicAttackRegex,
  basicMovementRegex,
  compoundAttackRegex,
  compoundMovementRegex,
} from "../shared/combo.ts";
import { translatedCombo } from "./comboParser.ts";
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
    const { compoundMovement, compoundMovementIndex } = compoundMovementParser(
      move,
    );
    comboReducer({ input: compoundMovement, index: compoundMovementIndex });
  }
  if (compoundAttackRegex.test(move)) {
    const { compoundAttack, compoundAttackIndex } = compoundAttackParser(move);
    comboReducer({ input: compoundAttack, index: compoundAttackIndex });
  }

  const commandList = Object.values(translatedCombo.value).map((command) =>
    command
  );
  // console.log(Object.values(translatedCombo.value).map((command) => command));

  console.group("commands successfully parsed:");
  console.table(commandList);
  console.groupEnd();

  return commandList;
};
