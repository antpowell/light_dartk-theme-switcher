import { IS_BROWSER } from "$fresh/runtime.ts";
import { ActionCommand } from "../../models/MovementsModels.ts";
import { ActionCommandInputs } from "../../models/MovementsModels.ts";
import { comboInputElements } from "../ComboInput.tsx";
import { combo } from "../../shared/combo.ts";
import { useSignalEffect } from "@preact/signals";

export function AttackInputs({ inputs }: ActionCommandInputs) {
  useSignalEffect(() => {
    console.log(`attack inputs: ${combo.value}`);
    combo.value;
  });
  // if (IS_BROWSER) {
  //   return <></>;
  // } else {
  return (
    <>
      <div className="grid grid-rows-2 grid-flow-col gap-0 rotate-[60deg]">
        <div
          id="input-1"
          data-active={combo.value.has(ActionCommand.LP) ? "true" : "false"}
          class={"bg-gray-200 p-4 w-3 h-4 rounded-full border-black border-2 data-[active=true]:bg-blue-500"}
        >
        </div>
        <div
          id="input-2"
          data-active={combo.value.has(ActionCommand.RP) ? "true" : "false"}
          class={"bg-gray-200 p-4 w-3 h-4 rounded-full border-black border-2 data-[active=true]:bg-yellow-500"}
        >
        </div>
        <div
          id="input-3"
          data-active={combo.value.has(ActionCommand.LK) ? "true" : "false"}
          class={"bg-gray-200 p-4 w-3 h-4 rounded-full border-black border-2 data-[active=true]:bg-green-500"}
        >
        </div>
        <div
          id="input-4"
          data-active={combo.value.has(ActionCommand.RK) ? "true" : "false"}
          class={"bg-gray-200 p-4 w-3 h-4 rounded-full border-black border-2 data-[active=true]:bg-red-500"}
        >
        </div>
      </div>
    </>
  );
  // }
}
