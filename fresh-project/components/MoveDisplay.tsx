import { IS_BROWSER } from "$fresh/runtime.ts";
import { signal, useSignal } from "@preact/signals";
import AttackInputs from "../islands/CommandInputs/AttackInputs.tsx";
import { ActionCommand, DirectionalInputs } from "../models/MovementsModels.ts";
import {
  DirectionalCommand,
  DirectionalInput,
} from "../models/MovementsModels.ts";
import MovementInputs from "../islands/CommandInputs/MovementInputs.tsx";

export default function MoveDisplay() {
  const combo1 = useSignal<DirectionalInputs>({
    inputs: [
      {
        command: DirectionalCommand.F,
        hold: false,
      },
      {
        command: DirectionalCommand.N,
        hold: false,
      },
      {
        command: DirectionalCommand.B,
        hold: false,
      },
      {
        command: DirectionalCommand.DB,
        hold: false,
      },
    ],
  });

  return (
    <div class={"flex gap-4 flex-row align-center"}>
      <MovementInputs
        inputs={combo1.value.inputs}
      />
      <AttackInputs
        inputs={new Set([
          ActionCommand.One,
          ActionCommand.Two,
          ActionCommand.Three,
        ])}
      />

      <AttackInputs inputs={new Set([ActionCommand.One])} />
      <AttackInputs inputs={new Set([ActionCommand.Two])} />
    </div>
  );
}
