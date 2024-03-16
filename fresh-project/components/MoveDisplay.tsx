import { IS_BROWSER } from "$fresh/runtime.ts";
import { signal, useSignal } from "@preact/signals";
import AttackInputs from "../islands/CommandInputs/AttackInputs.tsx";
import { ActionCommand, DirectionalInputs } from "../models/MovementsModels.ts";
import {
  DirectionalCommand,
  DirectionalInput,
} from "../models/MovementsModels.ts";
import MovementInputs from "./MovementInputs.tsx";

export default function MoveDisplay() {
  // if (!IS_BROWSER) return null;

  const combo1 = useSignal<DirectionalInputs>({
    inputs: {
      DB: {
        hold: false,
      },
    },
  });

  console.log(`combo1: ${JSON.stringify(combo1)}`);
  console.log(`combo1 type: ${typeof combo1.value}`);

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
      <MovementInputs
        inputs={combo1.value.inputs}
      />
    </div>
  );
}
