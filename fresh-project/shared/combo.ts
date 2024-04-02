import { signal } from "@preact/signals";
import { ActionCommand } from "../models/MovementsModels.ts";
import { JSX } from "https://esm.sh/v128/preact@10.19.2/src/index.js";

export const combo = signal<Set<ActionCommand>>(new Set());

export const comboDisplay = signal<JSX.Element[]>([]);
