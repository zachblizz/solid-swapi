import { Component } from "solid-js";

import type { Character } from "../types";

type Props = {
  char: Character;
}

const CharCard: Component<Props> = ({ char }) => {
  return (
    <div class="flex flex-col hover:shadow-lg cursor-default hover:border-indigo-500 duration-200 rounded-md p-3 border-2 border-indigo-300">
      <div class="text-xl font-semibold mb-1 text-indigo-700">{char.name}</div>
      <div class="text-sm text-indigo-500">
        {char.name} has {char.eye_color} eyes. Was born in the year {char.birth_year}, has {char.hair_color} hair, and is {char.height}cm tall.
      </div>
    </div>
  )
}

export default CharCard;
