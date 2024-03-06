import { useSignal } from "@preact/signals";
import { DirectionalInputs } from "../models/MovementsModels.ts";
import { B } from "../islands/CommandInputs/B.tsx";
import { D } from "../islands/CommandInputs/D.tsx";
import { F } from "../islands/CommandInputs/F.tsx";
import { Up } from "../islands/CommandInputs/Up.tsx";

export default function MovementInputs({ inputs }: DirectionalInputs) {
  const movementMap = useSignal({
    "D": <D hold={false} />,
    "F": <F hold={false} />,
    "B": <B hold={false} />,
    "U": <Up hold={false} />,
    "DB": <DB hold={false} />,
    "DF": <DF hold={false} />,
    "UB": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="3"
        class="w-12 h-12 stroke-white"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m19.5 19.5-15-15m0 0v11.25m0-11.25h11.25"
        />
      </svg>
    ),
    "UF": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="3"
        class="w-12 h-12 stroke-white"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
        />
      </svg>
    ),
    "DH": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="3"
        class="w-12 h-12 stroke-white"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
        />
      </svg>
    ),
    "FH": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="3"
        class="w-12 h-12 stroke-white"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
        />
      </svg>
    ),
    "BH": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="3"
        class="w-12 h-12 stroke-white"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
        />
      </svg>
    ),
    "UH": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="3"
        class="w-12 h-12 stroke-white"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
        />
      </svg>
    ),
    "DBH": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="3"
        class="w-12 h-12 stroke-white"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25"
        />
      </svg>
    ),
    "DFH": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="3"
        class="w-12 h-12 stroke-white"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
        />
      </svg>
    ),
    "UBH": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="3"
        class="w-12 h-12 stroke-white"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m19.5 19.5-15-15m0 0v11.25m0-11.25h11.25"
        />
      </svg>
    ),
    "UFH": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="3"
        class="w-12 h-12 stroke-white"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
        />
      </svg>
    ),
  });
  return (
    <>
      <div className="grid grid-flow-col gap-0">
        {inputs.forEach((input) => movementMap.value[input.command])}
      </div>
    </>
  );
}
