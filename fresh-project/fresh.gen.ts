// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $api_joke from "./routes/api/joke.ts";
import * as $greet_name_ from "./routes/greet/[name].tsx";
import * as $index from "./routes/index.tsx";
import * as $CommandInputs_AttackInputs from "./islands/CommandInputs/AttackInputs.tsx";
import * as $CommandInputs_MovementInputs_B from "./islands/CommandInputs/MovementInputs/B.tsx";
import * as $CommandInputs_MovementInputs_D from "./islands/CommandInputs/MovementInputs/D.tsx";
import * as $CommandInputs_MovementInputs_DB from "./islands/CommandInputs/MovementInputs/DB.tsx";
import * as $CommandInputs_MovementInputs_DF from "./islands/CommandInputs/MovementInputs/DF.tsx";
import * as $CommandInputs_MovementInputs_F from "./islands/CommandInputs/MovementInputs/F.tsx";
import * as $CommandInputs_MovementInputs_UB from "./islands/CommandInputs/MovementInputs/UB.tsx";
import * as $CommandInputs_MovementInputs_UF from "./islands/CommandInputs/MovementInputs/UF.tsx";
import * as $CommandInputs_MovementInputs_Up from "./islands/CommandInputs/MovementInputs/Up.tsx";
import * as $CommandInputs_MovementInputs_index from "./islands/CommandInputs/MovementInputs/index.ts";
import * as $Counter from "./islands/Counter.tsx";
import * as $PokemonCard from "./islands/PokemonCard.tsx";
import * as $PokemonSearchBar from "./islands/PokemonSearchBar.tsx";
import * as $usePokemonService from "./islands/usePokemonService.ts";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/api/joke.ts": $api_joke,
    "./routes/greet/[name].tsx": $greet_name_,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/CommandInputs/AttackInputs.tsx": $CommandInputs_AttackInputs,
    "./islands/CommandInputs/MovementInputs/B.tsx":
      $CommandInputs_MovementInputs_B,
    "./islands/CommandInputs/MovementInputs/D.tsx":
      $CommandInputs_MovementInputs_D,
    "./islands/CommandInputs/MovementInputs/DB.tsx":
      $CommandInputs_MovementInputs_DB,
    "./islands/CommandInputs/MovementInputs/DF.tsx":
      $CommandInputs_MovementInputs_DF,
    "./islands/CommandInputs/MovementInputs/F.tsx":
      $CommandInputs_MovementInputs_F,
    "./islands/CommandInputs/MovementInputs/UB.tsx":
      $CommandInputs_MovementInputs_UB,
    "./islands/CommandInputs/MovementInputs/UF.tsx":
      $CommandInputs_MovementInputs_UF,
    "./islands/CommandInputs/MovementInputs/Up.tsx":
      $CommandInputs_MovementInputs_Up,
    "./islands/CommandInputs/MovementInputs/index.ts":
      $CommandInputs_MovementInputs_index,
    "./islands/Counter.tsx": $Counter,
    "./islands/PokemonCard.tsx": $PokemonCard,
    "./islands/PokemonSearchBar.tsx": $PokemonSearchBar,
    "./islands/usePokemonService.ts": $usePokemonService,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
