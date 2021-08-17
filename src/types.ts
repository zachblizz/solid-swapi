export type Character = {
  name: string;
  height: string;
  hair_color: string;
  birth_year: string;
  eye_color: string;
}

export type SwapiResp = {
    count?: number;
    next?: string;
    previous?: string;
    results?: Character[];
}
