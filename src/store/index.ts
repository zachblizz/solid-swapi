import axios from "axios";
import { createStore } from "solid-js/store";

import type { SwapiResp } from "../types";

export const [swapiResp, setSwapiResp] = createStore<SwapiResp>({});

export async function getChars(searchTerm: string = "") {
  try {
    setSwapiResp({ isLoading: true });
    const resp = await axios.get<SwapiResp>(`https://swapi.dev/api/people/${searchTerm}`);
    setSwapiResp({ ...resp.data, isLoading: false });
  } catch (err) {
    console.error(err);
  }
}