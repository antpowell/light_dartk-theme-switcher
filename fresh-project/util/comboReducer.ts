import { InputLanguageCommandKeys } from "../shared/interfaces/models.ts";
import { commandMapSignal } from "../shared/state/signals.ts";
import { translatedCombo } from "../shared/state/signals.ts";

export const comboReducer = (
  { index, input }: { index: number; input: InputLanguageCommandKeys },
) => {
  // commandMapSignal.value = {
  //   ...commandMapSignal.value,
  //   index: input,
  // };
  translatedCombo.value = {
    ...translatedCombo.value,
    [index]: input,
  };
};
