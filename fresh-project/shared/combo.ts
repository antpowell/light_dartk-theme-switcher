import { signal } from "@preact/signals";
import { ActionCommand } from "../models/MovementsModels.ts";
import { JSX } from "https://esm.sh/v128/preact@10.19.2/src/index.js";

export const combo = signal<Set<ActionCommand>>(new Set());

export const comboDisplay = signal<JSX.Element[]>([]);

export const compoundAttackRegex =
  /([fudb])?([1-4]{1})((?<=[1-4]{1})(?<![\d]{2,})\+(?=[1-4]{1})(?![\d]{2,}))([1-4])/g;
export const compoundMovementRegex = /(([fudb])(?<=[ud])\/(?=[fb])([fudb]))?/g;
export const BasicMovementRegex =
  /(?<!\/)(?<!\+)(?<!\w)[fudb]{1,3}(?!\/)(?![\w])/g;
export const BasicAttackRegex =
  /(?<!\/)(?<!\+)(?<!\w)[1-4](?!\/)(?!\+)(?![\w])/g;
