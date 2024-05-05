import { signal } from "@preact/signals";
import type { JSX } from "preact";
import { InputIsland } from "./InputIsland.tsx";

import { ActionCommand, DirectionalInputs } from "../models/MovementsModels.ts";
import { comboParser } from "../util/comboParser.ts";

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

export const comboInputElements = signal<JSX.Element[]>([]);

let commandMap: DirectionalInputs;

export const ComboInput = () => {
  const handleComboInput = (
    event: JSX.TargetedEvent<HTMLInputElement, Event>,
  ) => {
    event.preventDefault();
    console.log("handling combo input...");
    comboInputState.value = event.currentTarget.value;

    comboParser(event.currentTarget.value);
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
    <div className="flex flex-col justify-center items-center p-8 w-full">
      <InputIsland
        label="Combo"
        name="combo"
        onChange={handleComboInput}
        onKeyUp={handleComboInputKeyUp}
        value={comboInputState.value}
      />
    </div>
  );
};

// d/f3,f,3,d/f1,d/b21,d/b23,f3,2u,4
