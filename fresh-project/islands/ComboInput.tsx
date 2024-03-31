import { computed, effect, signal } from "@preact/signals";
import type { JSX } from "preact";
import { InputIsland } from "./InputIsland.tsx";
import { InputLanguage } from "../models/InputLanguage.ts";

import { ActionCommand, DirectionalInputs } from "../models/MovementsModels.ts";
import { AttackInputs } from "./CommandInputs/AttackInputs.tsx";
import { combo } from "../shared/combo.ts";

export const comboInputState = signal("");

const compoundInputFinder = (input: string) => {
  const compoundInputCheckerRegex = /([fudb][1-4](\+[1-4]){0,3}$)/g;

  const hasCompoundInput = compoundInputCheckerRegex.test(input);
  if (!hasCompoundInput) {
    console.log("no compound inputs found");
    return null;
  }

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
  return compoundAttackInput;
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
  const attackCommand = compoundInputFinder(command);
  if (attackCommand == null) return;
  return getAttackCommandSetFromString(
    attackCommand,
  );
};

const comboMoveMaker = computed(() => {
});

export const comboInputElements = signal<JSX.Element[]>([]);

let commandMap: DirectionalInputs;

export const parsedCombo = computed(() => {
  const attacks = computed(() =>
    getCompoundAttackInputs(
      comboInputState.value,
    )
  );

  console.log(`attacks: ${JSON.stringify(attacks.value?.size, null, 2)}`);

  return (
    <>
      {attacks.value
        ? (
          <AttackInputs
            inputs={attacks.value}
          />
        )
        : null}
    </>
  );
});

effect(() => {
  console.log(`combo effect running...`);
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
    event.currentTarget.value.split(" ").forEach((move) => {
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
        // move.includes(/^(\w+)?[1-4](\+[1-4]){0,3}$/g);
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
    // parsedCombo.value;
  };

  // parsedCombo.value;

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
