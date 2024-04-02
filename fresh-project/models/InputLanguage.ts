import { DirectionalCommand } from "./MovementsModels.ts";

const commandMap = {
  input: [],
};

export const InputLanguage = {
  DOWN: {
    id: "D",
    component: {
      hold: false,
      command: DirectionalCommand.DOWN,
    },
  },
  FORWARD: {
    id: "F",
    component: {
      hold: false,
      command: DirectionalCommand.FORWARD,
    },
  },
  BACK: {
    id: "B",
    component: {
      hold: false,
      command: DirectionalCommand.BACK,
    },
  },
  UP: {
    id: "U",
    component: {
      hold: false,
      command: DirectionalCommand.UP,
    },
  },
  DOWN_BACK: {
    id: "DB",
    component: {
      hold: false,
      command: DirectionalCommand.DOWN_BACK,
    },
  },
  DOWN_FORWARD: {
    id: "DF",
    component: {
      hold: false,
      command: DirectionalCommand.DOWN_FORWARD,
    },
  },
  UP_BACK: {
    id: "UB",
    component: {
      hold: false,
      command: DirectionalCommand.UP_BACK,
    },
  },
  UP_FORWARD: {
    id: "UF",
    component: {
      hold: false,
      command: DirectionalCommand.UP_FORWARD,
    },
  },
  NEUTRAL: {
    id: "N",
    component: {
      hold: false,
      command: DirectionalCommand.NEUTRAL,
    },
  },

  WHILE_RAISING: {
    id: "WR",
    component: null,
  },
  COUNTER_HIT: {
    id: "CH",
    component: null,
  },
};
