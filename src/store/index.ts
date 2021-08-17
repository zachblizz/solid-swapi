import axios from "axios";
import { createStore } from "solid-js/store";

import type { SwapiResp } from "../types";

export const [state, setState] = createStore<SwapiResp>({});

export async function getChars(searchTerm: string = "") {
  try {
    const resp = await axios.get<SwapiResp>(`https://swapi.dev/api/people/${searchTerm}`);
    setState(resp.data);
  } catch (err) {
    console.error(err);
  }
}