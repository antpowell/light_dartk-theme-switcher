import { signal } from "@preact/signals";
import { comboRouter } from "./comboRouter.ts";
import { comboInputToComponentRouter } from "../shared/moveDisplayCreation.ts";

type MoveMapType = Map<number, { move: string; breakdown: string[] }>;

const moveMap = signal<MoveMapType>(new Map());
export const comboParser = (combo: string) => {
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

  Object.entries(moveMap.value).forEach((move, key) => {
    move.forEach((value, index) => {
      if (index === 1) {
        console.log("breakdown: ", value.breakdown);
        value.breakdown.forEach((input: string) => {
          comboInputToComponentRouter(input);
        });
      }
    });
    // console.log(move);
  });
};

comboParser("f1+2,d/b1");
