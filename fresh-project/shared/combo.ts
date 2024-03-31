import { signal } from "@preact/signals";
import { ActionCommand } from "../models/MovementsModels.ts";

export const combo = signal<Set<ActionCommand>>(new Set());
