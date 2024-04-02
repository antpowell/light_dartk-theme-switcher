import { computed, effect, signal } from "@preact/signals";
import type { JSX } from "preact";
import { InputIsland } from "./InputIsland.tsx";
import { InputLanguage } from "../models/InputLanguage.ts";

import {
  ActionCommand,
  DirectionalCommand,
  DirectionalInputs,
} from "../models/MovementsModels.ts";
import { AttackInputs } from "./CommandInputs/AttackInputs.tsx";
import { combo } from "../shared/combo.ts";
import { comboDisplay } from "../shared/combo.ts";
import { MovementInputs } from "./CommandInputs/MovementInputs.tsx";

export const comboInputState = signal("");

const compoundInputFinder = (input: string) => {
  const compoundInputCheckerRegex =
    /(?=.{2,7}$)[fudb]?([1-4]\+[1-4]){1}(\+[1-4]){0,2}$/g;
  let isCompoundAttack = false;

  const hasCompoundInput = compoundInputCheckerRegex.test(input);
  if (!hasCompoundInput) {
    console.log("no compound inputs found");

    return { isCompoundAttack, data: null };
  }

  isCompoundAttack = true;

  const firstCompoundInputPositions = input.search(
    /\+/g,
  );
  const lastCompoundInputPositions = input.lastIndexOf("+");
  console.log(
    `found the first and last compound inputs at positions ${firstCompoundInputPositions} and ${lastCompoundInputPositions}`,
  );

  const startOfCompoundAttackInputIndex = firstCompoundInputPositions - 1;
  const endOfCompoundAttackInputIndex = lastCompoundInputPositions + 2;

  const compoundAttackInput = input.slice(
    startOfCompoundAttackInputIndex,
    endOfCompoundAttackInputIndex,
  );
  console.log(`found the compound attack input: ${compoundAttackInput}`);
  return { isCompoundAttack, data: compoundAttackInput };
};

const getAttackCommandSetFromString = (attack: string) => {
  console.log(`attack command passed in: ${attack}`);

  const commands = attack.split("+");
  console.log(`individual attack commands: ${commands}`);

  const attackCommandSet = new Set<ActionCommand>();

  commands.forEach((command) => {
    switch (command) {
      case ActionCommand.LP:
        attackCommandSet.add(ActionCommand.LP);
        break;
      case ActionCommand.RP:
        attackCommandSet.add(ActionCommand.RP);
        break;
      case ActionCommand.LK:
        attackCommandSet.add(ActionCommand.LK);
        break;
      case ActionCommand.RK:
        attackCommandSet.add(ActionCommand.RK);
    }
  });

  console.log(
    `attack command set: ${
      JSON.stringify(Object.fromEntries(attackCommandSet.entries()), null, 2)
    }`,
  );

  return attackCommandSet;
};

const getCompoundAttackInputs = (
  command: string,
) => {
  const { isCompoundAttack, data: attackCommand } = compoundInputFinder(
    command,
  );
  if (!isCompoundAttack) return;
  return getAttackCommandSetFromString(
    attackCommand as string,
  );
};

const comboMoveMaker = computed(() => {
});

export const comboInputElements = signal<JSX.Element[]>([]);

let commandMap: DirectionalInputs;

// export const parsedCombo = computed(() => {
//   const attacks = computed(() =>
//     getCompoundAttackInputs(
//       comboInputState.value,
//     )
//   );

//   console.log(`attacks: ${JSON.stringify(attacks.value?.size, null, 2)}`);

//   return (
//     <>
//       {attacks.value
//         ? (
//           <AttackInputs
//             inputs={attacks.value}
//           />
//         )
//         : null}
//     </>
//   );
// });

const stringToMovementMapper = (inputs: string) => {
  console.log("string to movement mapper...");
  const movements: DirectionalInputs = { inputs: [] };
  let hasMovement = false;

  inputs.split("").forEach((input) => {
    hasMovement = true;
    switch (input.toUpperCase()) {
      case InputLanguage.DOWN_BACK.id:
        movements.inputs.push(InputLanguage.DOWN_BACK.component);
        break;
      case InputLanguage.DOWN_FORWARD.id:
        movements.inputs.push(InputLanguage.DOWN_FORWARD.component);
        break;
      case InputLanguage.UP_BACK.id:
        movements.inputs.push(InputLanguage.UP_BACK.component);
        break;
      case InputLanguage.UP_FORWARD.id:
        movements.inputs.push(InputLanguage.UP_FORWARD.component);
        break;
      case InputLanguage.BACK.id:
        movements.inputs.push(InputLanguage.BACK.component);
        break;
      case InputLanguage.DOWN.id:
        movements.inputs.push(InputLanguage.DOWN.component);
        break;
      case InputLanguage.FORWARD.id:
        movements.inputs.push(InputLanguage.FORWARD.component);
        break;
      case InputLanguage.UP.id:
        movements.inputs.push(InputLanguage.UP.component);
        break;
      // case "+":
      // case InputLanguage.LEFT_PUNCH.id:
      // case InputLanguage.RIGHT_PUNCH.id:
      // case InputLanguage.LEFT_KICK.id:
      // case InputLanguage.RIGHT_KICK.id:
      case "Space":
      case "Enter":
      default:
        hasMovement = false;
        return;
    }
  });
  console.log(
    `stringToMovementMapper: ${
      JSON.stringify(
        movements.inputs,
        null,
        2,
      )
    }`,
  );

  console.log("string to movement mapper ran...");
  return { hasMovement, movements };
};

const parseCombo = (comboInput: string) => {
  console.log("parsing combo...");

  comboInput.split(",").forEach((move) => {
    console.log(move);
    const { hasMovement, movements } = stringToMovementMapper(move);
    if (hasMovement) {
      comboDisplay.value.push(
        <MovementInputs
          inputs={movements.inputs}
        />,
      );
    }

    const { isCompoundAttack, data: compoundAttack } = compoundInputFinder(
      move,
    );

    if (isCompoundAttack) {
      console.log(`compound attack found: ${compoundAttack}`);

      comboDisplay.value.push(
        <AttackInputs
          inputs={getAttackCommandSetFromString(compoundAttack as string)}
        />,
      );
    }
  });
};

effect(() => {
  console.log(`combo effect running...`);
  parseCombo(comboInputState.value);
  combo.value = getCompoundAttackInputs(comboInputState.value) || new Set();
  console.log(`combo effect ran`);
  console.log(
    `new combo value: ${
      JSON.stringify(Object.fromEntries(combo.value.entries()), null, 2)
    } with a size of ${combo.value.size}`,
  );
});

export const ComboInput = () => {
  const handleComboInput = (
    event: JSX.TargetedEvent<HTMLInputElement, Event>,
  ) => {
    console.log("handling combo input...");
    event.currentTarget.value.split(",").forEach((move) => {
      console.log(move);

      if (
        /*
          match any sting of the form f[optional]2[required](+3+4+1)[optional]
          examples:
          ✅ f1+2+3+4 or 2+3 or d/b1+2 or b1+2+4
          ❌ f or 1+2+ or f1 or b db d1
        */
        move.trim().search(/^[fudb]?[1-4](\+[1-4]){0,3}$/g) !== -1
      ) {
        console.log(move);
      }

      move.split("").forEach((command) => {
        switch (command) {
          case InputLanguage.DOWN_BACK.id:
            commandMap.inputs.push(InputLanguage.DOWN_BACK.component);
            break;
          case InputLanguage.DOWN_FORWARD.id:
            commandMap.inputs.push(InputLanguage.DOWN_FORWARD.component);
            break;
          case InputLanguage.UP_BACK.id:
            commandMap.inputs.push(InputLanguage.UP_BACK.component);
            break;
          case InputLanguage.UP_FORWARD.id:
            commandMap.inputs.push(InputLanguage.UP_FORWARD.component);
            break;
          case InputLanguage.BACK.id:
            commandMap.inputs.push(InputLanguage.BACK.component);
            break;
          case InputLanguage.DOWN.id:
            commandMap.inputs.push(InputLanguage.DOWN.component);
            break;
          case InputLanguage.FORWARD.id:
            commandMap.inputs.push(InputLanguage.FORWARD.component);
            break;
          case InputLanguage.UP.id:
            commandMap.inputs.push(InputLanguage.UP.component);
            break;
          // case "+":
          // case InputLanguage.LEFT_PUNCH.id:
          // case InputLanguage.RIGHT_PUNCH.id:
          // case InputLanguage.LEFT_KICK.id:
          // case InputLanguage.RIGHT_KICK.id:
          case "Space":
          case "Enter":
          default:
            return;
        }
      });
    });
    console.log(event.currentTarget.value);
  };

  const handleComboInputKeyUp = (
    event: JSX.TargetedKeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === "Enter") {
      console.log(`enter pressed with value: ${event.currentTarget.value}`);
      comboInputState.value = event.currentTarget.value;
    }
  };

  return (
    <div className="flex flex-col justify-center items-center p-8 ">
      <InputIsland
        label="Combo"
        name="combo"
        onChange={handleComboInput}
        onKeyUp={handleComboInputKeyUp}
      />
    </div>
  );
};
