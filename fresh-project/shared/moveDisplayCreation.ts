export const moveDisplayCreation = (move: string) => {
};

export const comboInputRouter = (input: string) => {
  input.split("").forEach((command) => {
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
};
