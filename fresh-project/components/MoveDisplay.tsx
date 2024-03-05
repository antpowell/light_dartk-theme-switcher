import AttackInputs from "../islands/CommandInputs/AttackInputs.tsx";
import MovementInputs from "../islands/CommandInputs/MovementInputs.tsx";

export default function MoveDisplay() {
  return (
    <div class={"flex gap-4 flex-row"}>
      <AttackInputs inputs={new Set(["1", "2", "3"])} />
      <div>,</div>
      <AttackInputs inputs={new Set(["1"])} />
      <AttackInputs inputs={new Set(["2"])} />
      <MovementInputs inputs={new Set(["D", "F", "B", "U"])} />
      <MovementInputs inputs={new Set(["DB", "FD", "UB", "UF"])} />
      <MovementInputs inputs={new Set(["DB"])} />
    </div>
  );
}
//
