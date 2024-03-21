import { useSignalEffect } from "@preact/signals";
import { DirectionalInputs } from "../../models/MovementsModels.ts";
import { CommandLookUpService } from "../../services/MovementCommandLookUpService.tsx";

export default function MovementInputs({ inputs }: DirectionalInputs) {
  return (
    <>
      <div className="flex flex-row gap-0 w-52 h-fit">
        {CommandLookUpService({ inputs })}
      </div>
    </>
  );
}
