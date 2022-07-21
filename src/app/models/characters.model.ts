export interface CharactersInterfe {
  info: InfoInterface;
  results: Array<ResultInterface>;
}

export interface InfoInterface {
  count: number;
  pages: number;
  next: string;
  prev: string | null;
}

export interface ResultInterface {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: LocationInterface;
  location: LocationInterface;
  image: string;
  episode: Array<string>;
  url: string;
  created: Date;
}

export interface LocationInterface {
  name: string;
  url: string;
}
