import { OriginOrLocation } from './OriginOrLocation';

export interface ResultsEntity {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: OriginOrLocation;
  location: OriginOrLocation;
  image: string;
  episode?: (string)[] | null;
  url: string;
  created: string;
}

