export interface Moon {
  moon: string;
  rel: string;
}

export interface Mass {
  massValue: number;
  massExponent: number;
}

export interface Volume {
  volValue: number;
  volExponent: number;
}

export interface Planet {
  id: string;
  name: string;
  englishName: string;
  isPlanet: boolean;
  moons?: Moon[];
  semimajorAxis?: number;
  perihelion?: number;
  aphelion?: number;
  eccentricity?: number;
  inclination?: number;
  mass?: Mass;
  vol?: Volume;
  density?: number;
  gravity?: number;
  escape?: number;
  meanRadius?: number;
  equaRadius?: number;
  polarRadius?: number;
  flattening?: number;
  dimension?: string;
  sideralOrbit?: number;
  sideralRotation?: number;
  aroundPlanet?: null | object;
  discoveredBy?: string;
  discoveryDate?: string;
  alternativeName?: string;
  axialTilt?: number;
  avgTemp?: number;
  mainAnomaly?: number;
  argPeriapsis?: number;
  longAscNode?: number;
  bodyType?: string;
}
