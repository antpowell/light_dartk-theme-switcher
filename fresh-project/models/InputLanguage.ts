import { InputLanguageCommandType } from "../shared/interfaces/models.ts";
import {
  ActionCommand,
  ActionCommandKeys,
  DirectionalCommand,
  DirectionalCommandKeys,
} from "./MovementsModels.ts";

export type InputLanguageType = {
  [key in DirectionalCommandKeys & ActionCommandKeys]: {
    id: string;
    component: InputLanguageCommandType;
  };
};

export const InputLanguage = {
  DOWN: {
    id: "d",
    component: {
      hold: false,
      command: DirectionalCommand.DOWN,
    },
  },
  DOWN_HOLD: {
    id: "D",
    component: {
      hold: true,
      command: DirectionalCommand.DOWN_HOLD,
    },
  },
  FORWARD: {
    id: "f",
    component: {
      hold: false,
      command: DirectionalCommand.FORWARD,
    },
  },
  FORWARD_HOLD: {
    id: "F",
    component: {
      hold: true,
      command: DirectionalCommand.FORWARD_HOLD,
    },
  },
  BACK: {
    id: "b",
    component: {
      hold: false,
      command: DirectionalCommand.BACK,
    },
  },
  BACK_HOLD: {
    id: "B",
    component: {
      hold: true,
      command: DirectionalCommand.BACK_HOLD,
    },
  },
  UP: {
    id: "u",
    component: {
      hold: false,
      command: DirectionalCommand.UP,
    },
  },
  UP_HOLD: {
    id: "U",
    component: {
      hold: true,
      command: DirectionalCommand.UP_HOLD,
    },
  },
  DOWN_BACK: {
    id: "d/b",
    component: {
      hold: false,
      command: DirectionalCommand.DOWN_BACK,
    },
  },
  DOWN_BACK_HOLD: {
    id: "D/B",
    component: {
      hold: true,
      command: DirectionalCommand.DOWN_BACK_HOLD,
    },
  },
  DOWN_FORWARD: {
    id: "d/f",
    component: {
      hold: false,
      command: DirectionalCommand.DOWN_FORWARD,
    },
  },
  DOWN_FORWARD_HOLD: {
    id: "D/F",
    component: {
      hold: true,
      command: DirectionalCommand.DOWN_FORWARD_HOLD,
    },
  },
  UP_BACK: {
    id: "u/b",
    component: {
      hold: false,
      command: DirectionalCommand.UP_BACK,
    },
  },
  UP_BACK_HOLD: {
    id: "U/B",
    component: {
      hold: true,
      command: DirectionalCommand.UP_BACK_HOLD,
    },
  },
  UP_FORWARD: {
    id: "u/f",
    component: {
      hold: false,
      command: DirectionalCommand.UP_FORWARD,
    },
  },
  UP_FORWARD_HOLD: {
    id: "U/F",
    component: {
      hold: true,
      command: DirectionalCommand.UP_FORWARD_HOLD,
    },
  },
  NEUTRAL: {
    id: "n",
    component: {
      hold: false,
      command: DirectionalCommand.NEUTRAL,
    },
  },
  NEUTRAL_HOLD: {
    id: "N",
    component: {
      hold: true,
      command: DirectionalCommand.NEUTRAL_HOLD,
    },
  },

  WHILE_RAISING: {
    id: "WR",
    component: {
      hold: false,
      command: DirectionalCommand.NEUTRAL,
    },
  },
  COUNTER_HIT: {
    id: "CH",
    component: {
      hold: false,
      command: DirectionalCommand.NEUTRAL,
    },
  },
  LP: {
    id: "1",
    component: {
      hold: false,
      command: ActionCommand.LP,
    },
  },
  RP: {
    id: "2",
    component: {
      hold: false,
      command: ActionCommand.RP,
    },
  },
  LK: {
    id: "3",
    component: {
      hold: false,
      command: ActionCommand.LK,
    },
  },
  RK: {
    id: "4",
    component: {
      hold: false,
      command: ActionCommand.RK,
    },
  },
} as const;
