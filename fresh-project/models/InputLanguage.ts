import { InputLanguageCommandType } from "../shared/interfaces/models.ts";
import {
  ActionCommand,
  BasicDirectionalCommand,
  Command,
  CompoundDirectionalCommand,
  SpecialCommand,
} from "./MovementsModels.ts";

// export type InputLanguageType<T> = {
//   [key in keyof T]: {
//     id: string;
//     component: InputLanguageCommandType;
//   };
// };
export type InputLanguageType = {
  [key in Command]: {
    id: string;
    component: Command;
  };
};

export type InputLanguageProp = typeof InputLanguage;

export const InputLanguage: InputLanguageType = {
  DOWN: {
    id: "d",
    component: {
      hold: false,
      command: BasicDirectionalCommand.DOWN,
    },
  },
  DOWN_HOLD: {
    id: "D",
    component: {
      hold: true,
      command: BasicDirectionalCommand.DOWN_HOLD,
    },
  },
  FORWARD: {
    id: "f",
    component: {
      hold: false,
      command: BasicDirectionalCommand.FORWARD,
    },
  },
  FORWARD_HOLD: {
    id: "F",
    component: {
      hold: true,
      command: BasicDirectionalCommand.FORWARD_HOLD,
    },
  },
  BACK: {
    id: "b",
    component: {
      hold: false,
      command: BasicDirectionalCommand.BACK,
    },
  },
  BACK_HOLD: {
    id: "B",
    component: {
      hold: true,
      command: BasicDirectionalCommand.BACK_HOLD,
    },
  },
  UP: {
    id: "u",
    component: {
      hold: false,
      command: BasicDirectionalCommand.UP,
    },
  },
  UP_HOLD: {
    id: "U",
    component: {
      hold: true,
      command: BasicDirectionalCommand.UP_HOLD,
    },
  },
  DOWN_BACK: {
    id: "d/b",
    component: {
      hold: false,
      command: CompoundDirectionalCommand.DOWN_BACK,
    },
  },
  DOWN_BACK_HOLD: {
    id: "D/B",
    component: {
      hold: true,
      command: CompoundDirectionalCommand.DOWN_BACK_HOLD,
    },
  },
  DOWN_FORWARD: {
    id: "d/f",
    component: {
      hold: false,
      command: CompoundDirectionalCommand.DOWN_FORWARD,
    },
  },
  DOWN_FORWARD_HOLD: {
    id: "D/F",
    component: {
      hold: true,
      command: CompoundDirectionalCommand.DOWN_FORWARD_HOLD,
    },
  },
  UP_BACK: {
    id: "u/b",
    component: {
      hold: false,
      command: CompoundDirectionalCommand.UP_BACK,
    },
  },
  UP_BACK_HOLD: {
    id: "U/B",
    component: {
      hold: true,
      command: CompoundDirectionalCommand.UP_BACK_HOLD,
    },
  },
  UP_FORWARD: {
    id: "u/f",
    component: {
      hold: false,
      command: CompoundDirectionalCommand.UP_FORWARD,
    },
  },
  UP_FORWARD_HOLD: {
    id: "U/F",
    component: {
      hold: true,
      command: CompoundDirectionalCommand.UP_FORWARD_HOLD,
    },
  },
  NEUTRAL: {
    id: "n",
    component: {
      hold: false,
      command: SpecialCommand.NEUTRAL,
    },
  },
  NEUTRAL_HOLD: {
    id: "N",
    component: {
      hold: true,
      command: SpecialCommand.NEUTRAL_HOLD,
    },
  },

  WHILE_RAISING: {
    id: "WR",
    component: {
      hold: false,
      command: SpecialCommand.NEUTRAL,
    },
  },
  COUNTER_HIT: {
    id: "CH",
    component: {
      hold: false,
      command: SpecialCommand.NEUTRAL,
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
