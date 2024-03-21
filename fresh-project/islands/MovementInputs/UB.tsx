import { DirectionalCommandVariants } from "../../models/MovementsModels.ts";

export function UB({ hold }: DirectionalCommandVariants) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="3"
      class={`w-12 h-12 stroke-${!hold ? "white" : "black"}`}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m19.5 19.5-15-15m0 0v11.25m0-11.25h11.25"
      />
    </svg>
  );
}
