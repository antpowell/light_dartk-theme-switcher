import { DirectionalCommandVariants } from "../../models/MovementsModels.ts";

export function DB({ hold }: DirectionalCommandVariants) {
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
        d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25"
      />
    </svg>
  );
}
