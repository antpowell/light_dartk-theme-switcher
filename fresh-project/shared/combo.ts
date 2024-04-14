import { signal } from "@preact/signals";
import { ActionCommand } from "../models/MovementsModels.ts";
import { JSX } from "https://esm.sh/v128/preact@10.19.2/src/index.js";

export const combo = signal<Set<ActionCommand>>(new Set());

export const comboDisplay = signal<JSX.Element[]>([]);

// Test RegEx here: https://regex101.com/r/S4lICE/1
export const compoundAttackRegex =
  /(?<=[fudb]?)(?<!\d)([1-4](\+[1-4]){1,3})(?!\d)$/gm;

// Test RegEx here: https://regex101.com/r/BFI4gl/1
export const compoundMovementRegex = /(([fudb])(?<=[ud])\/(?=[fb])([fudb]))?/g;

export const BasicMovementRegex =
  /(?<!\/)(?<!\+)(?<!\d{1,})[fudb]{1,3}[H]?(?!\/)(?!\+)/g;

export const BasicAttackRegex =
  /(?<!\/)(?<!\+)(?<!\w)[1-4](?!\/)(?!\+)(?![\w])/g;

export const inputString = new RegExp(`BasicMovementRegex.source`);

// [fudb]?(([1-4]{1})((?<=[1-4]{1})\+(?=[1-4]{1}))([1-4]{1})){1,2}
