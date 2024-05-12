import { InputLanguageCommand } from "../shared/interfaces/models.ts";
import { translatedCombo } from "../shared/state/signals.ts";

export const comboReducer = (
  { index, input }: { index: number; input: InputLanguageCommand },
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
