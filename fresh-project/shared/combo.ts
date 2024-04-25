// @deno-types='https://deno.land/x/xregexp/types/index.d.ts';
import { signal } from "@preact/signals";
import { ActionCommand } from "../models/MovementsModels.ts";
import { JSX } from "https://esm.sh/v128/preact@10.19.2/src/index.js";
import XRegExp from "https://deno.land/x/xregexp@v1.0.1/src/index.js";

export const comboList = signal<Set<ActionCommand>>(new Set());

export const moveList = signal<JSX.Element[]>([]);

export const comboDisplay = signal<JSX.Element[]>([]);

// Test RegEx here: https://regex101.com/r/S4lICE/1
export const compoundAttackRegex =
  /(?<=[fudb]?)(?<!\d)([1-4](\+[1-4]){1,3})(?!\d)/gm;

// Test RegEx here: https://regex101.com/r/BFI4gl/1lk

export const compoundMovementRegex = /[fudb]\/[fudb]/gm;

export const basicMovementRegex = /(?<!\/)(?<!\+)[fudb]{1,3}[H]?(?!\/)(?!\+)/g;

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
