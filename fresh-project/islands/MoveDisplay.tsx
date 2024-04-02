import { useSignal } from "@preact/signals";
import { JSX } from "https://esm.sh/v128/preact@10.19.2/src/index.js";
import {
  DirectionalCommand,
  DirectionalInputs,
} from "../models/MovementsModels.ts";
import { combo, comboDisplay } from "../shared/combo.ts";
import { AttackInputs } from "./CommandInputs/AttackInputs.tsx";
import { MovementInputs } from "./CommandInputs/MovementInputs.tsx";

export default function MoveDisplay({ children }: { children?: JSX.Element }) {
  const combo1 = useSignal<DirectionalInputs>({
    inputs: [
      {
        command: DirectionalCommand.FORWARD,
        hold: false,
      },
      {
        command: DirectionalCommand.NEUTRAL,
        hold: false,
      },
      {
        command: DirectionalCommand.BACK,
        hold: false,
      },
      {
        command: DirectionalCommand.DOWN_BACK,
        hold: false,
      },
    ],
  });

  return (
    <div class={"flex gap-4 flex-row align-center"}>
      {children ? children : (
        <>
          <MovementInputs
            inputs={combo1.value.inputs}
          />

          {combo.value.size !== 0
            ? <AttackInputs inputs={combo.value} />
            : null}

          {comboDisplay.value}
        </>
      )}

      {/* <>{comboDisplay.value}</> */}
    </div>
  );
}

`F1+2 DF3D2 212 F121 ✅`;
`F3FF21 UF3WR1 -> 212 ✅`;
`f1+3, ff4, 3, 1, b3f, 2, 1+2`;

`Heat FF421 DF23 DF21 DF1 FF421 1 F32UF4`;

//    <AttackInputs
//   inputs={new Set([
//     ActionCommand.LP,
//     ActionCommand.RP,
//     ActionCommand.LK,
//   ])}
// />

// <AttackInputs inputs={new Set([ActionCommand.LP])} />
// <AttackInputs inputs={new Set([ActionCommand.RP])} />
