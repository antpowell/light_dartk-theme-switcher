import { CommandLookUpService } from "../../services/MovementCommandLookUpService.tsx";
import { CommandMapType } from "../../shared/interfaces/models.ts";

export function MovementInputs({ inputs }: CommandMapType) {
  console.log("rendering movement inputs... because of inputs", inputs);
  return (
    <>
      <div className="flex flex-row gap-0 w-52 h-fit">
        {CommandLookUpService({ inputs })}
      </div>
    </>
  );
}
