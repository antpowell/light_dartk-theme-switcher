import { signal } from "@preact/signals";
import { comboRouter } from "./comboRouter.ts";

const moveMap = signal(new Map());
export const comboParser = (combo: string) => {
  console.log(`parsing combo... ${moveMap}`);
  combo.split(",").forEach((move, index) => {
    moveMap.value = { ...moveMap.value, [index]: move };
    comboRouter(move);
  });
};

export const translatedCombo = signal({});

comboParser("f1+2");
