import { signal } from "@preact/signals";
import { comboRouter } from "./comboRouter.ts";
import { comboInputToComponentRouter } from "../shared/moveDisplayCreation.ts";
import {
  CommandMapType,
  InputLanguageCommandKeys,
} from "../shared/interfaces/models.ts";
import { commandMapSignal } from "../shared/state/signals.ts";

type MoveMapType = Map<
  number,
  { move: string; breakdown: InputLanguageCommandKeys[] }
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

  // Object.entries(moveMap.value).forEach(
  //   ([index, { move, breakdown }]: MoveMapType, key) => {
  // console.log(`each move: `, move);
  // breakdown.forEach((value, index) => {
  //   if (index === 1) {
  //     console.log("breakdown: ", value.breakdown);
  //     value.breakdown.forEach((input: string) => {
  //       const { hasMovement, commandMap } = comboInputToComponentRouter(
  //         input,
  //       );
  //       localHasMovement = hasMovement;
  //       localCommandMap = commandMap;
  //     });
  //     // console.group();
  //     // console.log("signal");
  //     // console.table(commandMapSignal.value.inputs.value);
  //     // console.log(
  //     //   "🚀 ~ value.breakdown.forEach ~ hasMovement:",
  //     //   localHasMovement,
  //     // );
  //     // console.log(
  //     //   "🚀 ~ value.breakdown.forEach ~ commandMap:",
  //     //   localCommandMap,
  //     // );
  //     // console.groupEnd();
  //   }
  // });
  // },
  // );
};

// comboParser("f1+2,d/b1");
