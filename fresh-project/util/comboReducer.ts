import { translatedCombo } from "../shared/state/signals.ts";

export const comboReducer = (
  { index, input }: { index: number; input: string },
) => {
  translatedCombo.value = {
    ...translatedCombo.value,
    [index]: input,
  };
};
