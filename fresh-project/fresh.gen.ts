// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $api_joke from "./routes/api/joke.ts";
import * as $greet_name_ from "./routes/greet/[name].tsx";
import * as $index from "./routes/index.tsx";
import * as $CommandInputs_AttackInputs from "./islands/CommandInputs/AttackInputs.tsx";
import * as $CommandInputs_MovementInputs from "./islands/CommandInputs/MovementInputs.tsx";
import * as $Counter from "./islands/Counter.tsx";
import * as $MovementInputs_B from "./islands/MovementInputs/B.tsx";
import * as $MovementInputs_D from "./islands/MovementInputs/D.tsx";
import * as $MovementInputs_DB from "./islands/MovementInputs/DB.tsx";
import * as $MovementInputs_DF from "./islands/MovementInputs/DF.tsx";
import * as $MovementInputs_F from "./islands/MovementInputs/F.tsx";
import * as $MovementInputs_UB from "./islands/MovementInputs/UB.tsx";
import * as $MovementInputs_UF from "./islands/MovementInputs/UF.tsx";
import * as $MovementInputs_Up from "./islands/MovementInputs/Up.tsx";
import * as $MovementInputs_index from "./islands/MovementInputs/index.ts";
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
    "./islands/CommandInputs/MovementInputs.tsx": $CommandInputs_MovementInputs,
    "./islands/Counter.tsx": $Counter,
    "./islands/MovementInputs/B.tsx": $MovementInputs_B,
    "./islands/MovementInputs/D.tsx": $MovementInputs_D,
    "./islands/MovementInputs/DB.tsx": $MovementInputs_DB,
    "./islands/MovementInputs/DF.tsx": $MovementInputs_DF,
    "./islands/MovementInputs/F.tsx": $MovementInputs_F,
    "./islands/MovementInputs/UB.tsx": $MovementInputs_UB,
    "./islands/MovementInputs/UF.tsx": $MovementInputs_UF,
    "./islands/MovementInputs/Up.tsx": $MovementInputs_Up,
    "./islands/MovementInputs/index.ts": $MovementInputs_index,
    "./islands/PokemonCard.tsx": $PokemonCard,
    "./islands/PokemonSearchBar.tsx": $PokemonSearchBar,
    "./islands/usePokemonService.ts": $usePokemonService,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
