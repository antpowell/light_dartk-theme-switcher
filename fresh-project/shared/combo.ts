// @deno-types='https://deno.land/x/xregexp/types/index.d.ts';
import { signal } from "@preact/signals";
import { JSX } from "https://esm.sh/v128/preact@10.19.2/src/index.js";
import { ActionCommand } from "../models/MovementsModels.ts";

export const comboList = signal<Set<ActionCommand>>(new Set());

export const moveList = signal<JSX.Element[]>([]);

export const comboDisplay = signal<JSX.Element[]>([]);

// Test RegEx here: https://regex101.com/r/S4lICE/1
export const compoundAttackRegex =
  /(?<=[fudb]?)(?<!\d)([1-4](\+[1-4]){1,3})(?!\d)/gm;

// Test RegEx here: https://regex101.com/r/BFI4gl/1lk

export const compoundMovementRegex = /[fudbFUDB]\/[fudbFUDB]/gm;

const basicMovementRegexCore = /(?<!\/)(?<!\+)[fudbFUDB](?!\/)(?!\+)/g;
const basicMovementRegex2 =
  /(?<!\+)(?<!\/)(?<![fudbFUDB])(?<![\w])(?<![5-9|0])[fudbFUDB](?!\+)(?!\/)(?![fudbFUDB])(?![5-9|0])(?![\w])/g;
export const basicMovementRegex =
  /(?<!\+)(?<!\/)(?<![fudbFUDB])(?<![5-9|0])[fudbFUDB](?![5-9|0])(?![fudbFUDB])(?!\+)(?!\/)/g;

export const basicAttackRegex =
  /(?<![0])(?<![5-9])(?<!\+)[1-4](?!\+)(?![5-9])(?![0])/g;
// export const basicAttackRegex =
//   /(?<!\/)(?<!\+)(?<!\w)[1-4](?!\/)(?!\+)(?![\w])/g;

export const inputString = new RegExp(
  compoundAttackRegex.source + basicMovementRegex.source,
  "g",
);

// console.log(compoundAttackRegex.test(`f1+2`));
// console.log(`f1+2`.match(compoundAttackRegex));
// console.log(`f1+2`.match(basicAttackRegex));
