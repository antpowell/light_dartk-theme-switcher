import { IS_BROWSER } from "$fresh/runtime.ts";
import { signal, useSignal } from "@preact/signals";
import AttackInputs from "../islands/CommandInputs/AttackInputs.tsx";
import { ActionCommand, DirectionalInputs } from "../models/MovementsModels.ts";
import {
  DirectionalCommand,
  DirectionalInput,
} from "../models/MovementsModels.ts";
import MovementInputs from "../islands/CommandInputs/MovementInputs.tsx";
import { B, F } from "../islands/MovementInputs/index.ts";

export default function MoveDisplay() {
  const combo1 = useSignal<DirectionalInputs>({
    inputs: [
      {
        command: DirectionalCommand.F,
        hold: false,
      },
      {
        command: DirectionalCommand.B,
        hold: false,
      },
    ],
  });

  return (
    <div class={"flex gap-4 flex-row"}>
      <AttackInputs
        inputs={new Set([
          ActionCommand.One,
          ActionCommand.Two,
          ActionCommand.Three,
        ])}
      />
      <div>,</div>
      <AttackInputs inputs={new Set([ActionCommand.One])} />
      <AttackInputs inputs={new Set([ActionCommand.Two])} />
      {/* <MovementInputs inputs={new Set<Input>(["D", "F", "B", "U"])} /> */}
      {/* <MovementInputs inputs={new Set(["DB", "FD", "UB", "UF"])} /> */}
      {
        /* <MovementInputs
        inputs={combo1.value.inputs}
      /> */
      }
      <F key={0} hold={false} />
      <B key={1} hold={false} />
      {
        /* <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="3"
        class={`w-12 h-12 stroke-${!true ? "white" : "black"}`}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
        />
      </svg> */
      }
    </div>
  );
}
