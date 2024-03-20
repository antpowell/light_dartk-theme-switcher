import { ActionCommand } from "../../models/MovementsModels.ts";
import { ActionCommandInputs } from "../../models/MovementsModels.ts";

export default function AttackInputs({ inputs }: ActionCommandInputs) {
  console.log(`AttackInputs: ${JSON.stringify(inputs)}`);
  console.log(`inputs type: ${typeof inputs}`);
  return (
    <>
      <div className="grid grid-rows-2 grid-flow-col gap-0 rotate-[60deg]">
        <div
          id="input-1"
          data-active={inputs.has(ActionCommand.One) ? "true" : "false"}
          class={"bg-gray-200 p-4 w-3 h-4 rounded-full border-black border-2 data-[active=true]:bg-blue-500"}
        >
        </div>
        <div
          id="input-2"
          data-active={inputs.has(ActionCommand.Two) ? "true" : "false"}
          class={"bg-gray-200 p-4 w-3 h-4 rounded-full border-black border-2 data-[active=true]:bg-yellow-500"}
        >
        </div>
        <div
          id="input-3"
          data-active={inputs.has(ActionCommand.Three) ? "true" : "false"}
          class={"bg-gray-200 p-4 w-3 h-4 rounded-full border-black border-2 data-[active=true]:bg-green-500"}
        >
        </div>
        <div
          id="input-4"
          data-active={inputs.has(ActionCommand.Four) ? "true" : "false"}
          class={"bg-gray-200 p-4 w-3 h-4 rounded-full border-black border-2 data-[active=true]:bg-red-500"}
        >
        </div>
      </div>
    </>
  );
}
