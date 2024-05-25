import { useSignalEffect } from "@preact/signals";

import {
  ActionCommand,
  ActionCommandInputs,
} from "../../models/MovementsModels.ts";
import { comboList } from "../../shared/combo.ts";
import { InputLanguageCommandType } from "../../shared/interfaces/models.ts";

export function AttackInputs({ attacks }: { attacks: Set<ActionCommand> }) {
  useSignalEffect(() => {
    console.log(`attack inputs: ${JSON.stringify(attacks, null, 2)}`);
    comboList.value;
  });

  return (
    <>
      {/* <div className="grid grid-rows-2 grid-flow-col gap-0 rotate-[60deg]"> */}
      <div className="grid grid-cols-2">
        <div
          id="input-1"
          data-active={attacks.has(ActionCommand.RP) ? "true" : "false"}
          class={"bg-gray-200 p-4 rounded-full border-black border-2 data-[active=true]:bg-blue-500"}
        >
        </div>
        <div
          id="input-2"
          data-active={attacks.has(ActionCommand.LP) ? "true" : "false"}
          class={"bg-gray-200 p-4 rounded-full border-black border-2 data-[active=true]:bg-yellow-500"}
        >
        </div>
        <div
          id="input-3"
          data-active={attacks.has(ActionCommand.RK) ? "true" : "false"}
          class={"bg-gray-200 p-4 rounded-full border-black border-2 data-[active=true]:bg-green-500"}
        >
        </div>
        <div
          id="input-4"
          data-active={attacks.has(ActionCommand.LK) ? "true" : "false"}
          class={"bg-gray-200 p-4 rounded-full border-black border-2 data-[active=true]:bg-red-500"}
        >
        </div>
      </div>
    </>
  );
}
