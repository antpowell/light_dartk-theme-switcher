import { computed } from "@preact/signals";
import { JSX } from "https://esm.sh/v128/preact@10.19.2/src/index.js";
import {
  ActionCommand,
  BasicDirectionalCommand,
  DirectionalCommand,
} from "../models/MovementsModels.ts";
import { commandMapSignal } from "../shared/state/signals.ts";
import { MovementInputs } from "./CommandInputs/MovementInputs.tsx";
import { D } from "./MovementInputs/D.tsx";
import { InputLanguageCommand } from "../shared/interfaces/models.ts";

export default function MoveDisplay({ children }: { children?: JSX.Element }) {
  // const combo1 = [{
  //   command: new Set<ActionCommand>([
  //     ActionCommand.LK,
  //     ActionCommand.RK,
  //   ]),
  //   hold: false,
  // }];

  const combo1 = [{
    command: new Set<ActionCommand>([
      ActionCommand.RK,
    ]),
    hold: false,
  }, {
    command: new Set<ActionCommand>([
      ActionCommand.LK,
      ActionCommand.RK,
    ]),
    hold: false,
  }, {
    command: new Set<ActionCommand>([
      ActionCommand.LK,
      ActionCommand.RK,
    ]),
    hold: false,
  }, {
    command: new Set<ActionCommand>([
      ActionCommand.LK,
      ActionCommand.RK,
    ]),
    hold: false,
  }, {
    command: new Set<ActionCommand>([
      ActionCommand.LK,
      ActionCommand.RK,
    ]),
    hold: false,
  }];
  const combo2 = [{
    command: BasicDirectionalCommand.DOWN,
    hold: false,
  }, {
    command: new Set<ActionCommand>([
      ActionCommand.RK,
    ]),
    hold: false,
  }, {
    command: BasicDirectionalCommand.DOWN,
    hold: false,
  }, {
    command: new Set<ActionCommand>([
      ActionCommand.RK,
    ]),
    hold: false,
  }, {
    command: new Set<ActionCommand>([
      ActionCommand.LK,
      ActionCommand.RK,
    ]),
    hold: false,
  }];

  const components = computed(() => {
    return commandMapSignal.value.inputs.value.map((component, index) => {
      return component;
    });
  });
  console.log("📔 ~ components ~ components:", components.value);

  return (
    <div class={"flex gap-4 flex-row align-center w-full justify-center"}>
      {children ? children : (
        <>
          <div className="flex flex-col items-center justify-center w-full">
            <h1 class={`text-lg font-bold`}>Move Display</h1>
            <MovementInputs inputs={combo2} />
          </div>
        </>
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
