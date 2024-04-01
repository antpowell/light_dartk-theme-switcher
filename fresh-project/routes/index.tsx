import {
  computed,
  effect,
  useComputed,
  useSignal,
  useSignalEffect,
} from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import PokemonCard from "../islands/PokemonCard.tsx";
import PokemonSearchBar from "../islands/PokemonSearchBar.tsx";
import MoveDisplay from "../islands/MoveDisplay.tsx";
import { ComboInput, parsedCombo } from "../islands/ComboInput.tsx";

export default function Home() {
  const count = useSignal(0);

  const parsedComboComponentOrPlaceholder = useSignal(<>Testing...</>);

  const parsedComboComponent = useComputed(() =>
    parsedCombo.value ? parsedCombo.value : <div>Testing...</div>
  );

  useSignalEffect(() => {
    console.log(`inside of Home useEffect`);
    console.log(`inside of Home we get: ${parsedCombo.value}`);
    if (parsedCombo.value) {
      parsedComboComponentOrPlaceholder.value = parsedCombo.value;
    }
  });

  return (
    <>
      <div class="px-4 py-8 mx-auto bg-[#86efac]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <PokemonCard />
          <PokemonSearchBar />
          <img
            class="my-6"
            src="/logo.svg"
            width="128"
            height="128"
            alt="the Fresh logo: a sliced lemon dripping with juice"
          />
          <h1 class="text-4xl font-bold">Welcome to Fresh</h1>
          <p class="my-4">
            Try updating this message in the
            <code class="mx-2">./routes/index.tsx</code> file, and refresh.
          </p>
          <Counter count={count} />
          <MoveDisplay />
          <ComboInput />
          <MoveDisplay>
            {parsedComboComponentOrPlaceholder.value}
          </MoveDisplay>
        </div>
      </div>
    </>
  );
}
