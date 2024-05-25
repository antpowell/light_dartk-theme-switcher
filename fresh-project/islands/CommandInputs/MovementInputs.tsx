import { CommandLookUpService } from "../../services/MovementCommandLookUpService.tsx";
import { CommandMapType } from "../../shared/interfaces/models.ts";

export function MovementInputs({ inputs }: CommandMapType) {
  console.log("rendering movement inputs... because of inputs", inputs);
  return (
    <>
      <div className={`grid grid-flow-col`}>
        {CommandLookUpService({ inputs })}
      </div>
    </>
  );
}
