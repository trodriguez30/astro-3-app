interface MassPlanet {
  massValue: number;
  massExponent: number;
}
export interface Planet {
  id: string;
  name: string;
  englishName: string;
  mass?: MassPlanet;
  isPlanet: boolean;
  imageUrl?: string;
  gravity?: string;
  meanRadius?: string;
  avgTemp?: string;
}