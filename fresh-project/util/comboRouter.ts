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
  if (basicMovementRegex.test(move)) {
    const { basicMovement, basicMovementIndex } = basicMovementParser(move);
    comboReducer({ input: basicMovement, index: basicMovementIndex });
  }
  if (basicAttackRegex.test(move)) {
    const { basicAttack, basicAttackIndex } = basicAttackParser(move);
    comboReducer({ input: basicAttack, index: basicAttackIndex });
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

  console.log(JSON.stringify(translatedCombo.value));
};
