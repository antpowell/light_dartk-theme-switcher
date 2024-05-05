import { signal } from "@preact/signals";
import { comboRouter } from "./comboRouter.ts";
import { comboInputToComponentRouter } from "../shared/moveDisplayCreation.ts";
import { CommandMapType } from "../shared/interfaces/models.ts";
import { commandMapSignal } from "../shared/state/signals.ts";

type MoveMapType = Map<number, { move: string; breakdown: string[] }>;

const moveMap = signal<MoveMapType>(new Map());
export const comboParser = (combo: string) => {
  let localHasMovement: boolean;
  let localCommandMap: CommandMapType;
  moveMap.value = new Map();
  console.log(`parsing combo... ${moveMap}`);

  combo.split(",").forEach((move, index) => {
    moveMap.value = {
      ...moveMap.value,
      [index]: { move: move, breakdown: comboRouter(move) },
    };
  });

  console.group("🚀 ~ combo.split ~ move:");
  console.table(moveMap.value);
  console.groupEnd();

  commandMapSignal.value.inputs.value = [];
  Object.entries(moveMap.value).forEach((move, key) => {
    move.forEach((value, index) => {
      if (index === 1) {
        console.log("breakdown: ", value.breakdown);
        value.breakdown.forEach((input: string) => {
          const { hasMovement, commandMap } = comboInputToComponentRouter(
            input,
          );
          localHasMovement = hasMovement;
          localCommandMap = commandMap;
        });
        console.group();
        console.log("signal");
        console.table(commandMapSignal.value.inputs.value);
        console.log(
          "🚀 ~ value.breakdown.forEach ~ hasMovement:",
          localHasMovement,
        );
        console.log(
          "🚀 ~ value.breakdown.forEach ~ commandMap:",
          localCommandMap,
        );
        console.groupEnd();
      }
    });
  });
};

// comboParser("f1+2,d/b1");
