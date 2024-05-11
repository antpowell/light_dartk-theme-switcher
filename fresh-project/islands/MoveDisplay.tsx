import { JSX } from "https://esm.sh/v128/preact@10.19.2/src/index.js";
import {
  ActionCommand,
  DirectionalCommand,
} from "../models/MovementsModels.ts";
import { MovementInputs } from "./CommandInputs/MovementInputs.tsx";
import { translatedCombo } from "../shared/state/signals.ts";
import { commandMapSignal } from "../shared/state/signals.ts";
import { computed, effect } from "@preact/signals";

export default function MoveDisplay({ children }: { children?: JSX.Element }) {
  // const combo1 = [{
  //   command: new Set<ActionCommand>([
  //     ActionCommand.LK,
  //     ActionCommand.RK,
  //   ]),
  //   hold: false,
  // }];

  const components = computed(() => {
    return commandMapSignal.value.inputs.value.map((component, index) => {
      return component;
    });
  });
  console.log("📔 ~ components ~ components:", components.value);

  const combo1 = [{
    command: new Set<ActionCommand>([
      ActionCommand.RK,
    ]),
    hold: false,
  }];

  return (
    <div class={"flex gap-4 flex-row align-center"}>
      {children ? children : (
        <>
          <div className="flex flex-col items-center">
            <h1 class={`text-lg font-bold`}>Move Display</h1>
            <div>
              {
                /* <MovementInputs
                inputs={combo1}
              /> */
              }
              <MovementInputs inputs={commandMapSignal.value.inputs.value} />
              {/* <MovementInputs inputs={translatedCombo.value} /> */}
            </div>
          </div>
        </>
        // <>
        //   <h1 class={`text-lg font-bold`}>Move Display</h1>

        //   {
        //     <MovementInputs
        //       inputs={moveList.value}
        //     />
        //   }

        //   {comboList.value.size !== 0
        //     ? <AttackInputs inputs={comboList.value} />
        //     : null}
        // </>
      )}
    </div>
  );
}

// RegEx example link for compound attack inputs [fudb][1-4](\+[1-4]){0,3}
// https://regex101.com/r/Xumiw8/1
`F1+2 DF3D2 212 F121 ✅`;
`F3FF21 UF3WR1 -> 212 ✅`;

//create a regEx that can match a combo of the form f[optional]2[required](+3+4+1)[optional]
`f1+3,ff4,3,1,b3f,2,1+2,u/f2`;

`Heat FF421 DF23 DF21 DF1 FF421 1 F32UF4`;

`/+(?=[1-4])/g`;
