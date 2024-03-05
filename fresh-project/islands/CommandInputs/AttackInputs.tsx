import { useSignal } from "@preact/signals";

type Input = "1" | "2" | "3" | "4";
interface Inputs {
  inputs: Set<Input>;
}

export default function AttackInputs({ inputs }: Inputs) {
  return (
    <>
      <div className="grid grid-rows-2 grid-flow-col gap-0 rotate-[60deg]">
        <div
          id="input-1"
          data-active={inputs.has("1") ? "true" : "false"}
          class={"bg-gray-200 p-4 w-3 h-4 rounded-full border-black border-2 data-[active=true]:bg-red-700"}
        >
        </div>
        <div
          id="input-2"
          data-active={inputs.has("2") ? "true" : "false"}
          class={"bg-gray-200 p-4 w-3 h-4 rounded-full border-black border-2 data-[active=true]:bg-red-700"}
        >
        </div>
        <div
          id="input-3"
          data-active={inputs.has("3") ? "true" : "false"}
          class={"bg-gray-200 p-4 w-3 h-4 rounded-full border-black border-2 data-[active=true]:bg-red-700"}
        >
        </div>
        <div
          id="input-4"
          data-active={inputs.has("4") ? "true" : "false"}
          class={"bg-gray-200 p-4 w-3 h-4 rounded-full border-black border-2 data-[active=true]:bg-red-700"}
        >
        </div>
      </div>
    </>
  );
}
