import { signal } from "@preact/signals";
import { InputLanguageCommand } from "../shared/interfaces/models.ts";
import { comboInputToComponentRouter } from "../shared/moveDisplayCreation.ts";
import { commandMapSignal } from "../shared/state/signals.ts";
import { comboRouter } from "./comboRouter.ts";

type MoveMapType = Map<
  number,
  { move: string; breakdown: InputLanguageCommand[] }
> // { move: string; breakdown: InputLanguageCommandType[] }
;

const moveMap = signal<MoveMapType>(new Map());
export const comboParser = (combo: string) => {
  moveMap.value = new Map();

  combo.split(",").forEach((move, index) => {
    // moveMap.value = new Map([...moveMap.value, [index, { move, breakdown: [] }]]);
    moveMap.value = new Map([...moveMap.value, [
      index,
      { move, breakdown: comboRouter(move) },
    ]]);
  });

  console.group("🚀 ~ combo.split ~ move:");
  console.table(moveMap.value);
  console.groupEnd();

  commandMapSignal.value.inputs.value = [];

  moveMap.value.forEach(({ move, breakdown }, index) => {
    breakdown.forEach((input, index) => {
      comboInputToComponentRouter(input);
    });
  });
};
