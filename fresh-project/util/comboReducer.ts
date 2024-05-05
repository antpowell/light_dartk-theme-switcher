import { ActionCommand } from "../models/MovementsModels.ts";
import { translatedCombo } from "../shared/state/signals.ts";

export const comboReducer = (
  { index, input }: { index: number; input: string | Set<ActionCommand> },
) => {
  translatedCombo.value = {
    ...translatedCombo.value,
    [index]: input,
  };
};
