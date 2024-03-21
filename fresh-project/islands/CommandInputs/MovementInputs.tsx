import { useSignalEffect } from "@preact/signals";
import { DirectionalInputs } from "../../models/MovementsModels.ts";
import { CommandLookUpService } from "../../services/MovementCommandLookUpService.tsx";

export default function MovementInputs({ inputs }: DirectionalInputs) {
  return (
    <>
      <div className="grid grid-flow-col gap-0">
        {CommandLookUpService({ inputs })}
      </div>
    </>
  );
}
