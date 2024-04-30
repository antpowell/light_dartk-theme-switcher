import { CommandLookUpService } from '../../services/MovementCommandLookUpService.tsx';
import { CommandMapType } from '../../shared/interfaces/models.ts';

export function MovementInputs({ inputs }: CommandMapType) {
  return (
    <>
      <div className="flex flex-row gap-0 w-52 h-fit">
        {CommandLookUpService({ inputs })}
      </div>
    </>
  );
}
