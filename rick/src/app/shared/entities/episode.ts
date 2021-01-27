import { ResultsEntity } from './ResultsEntity';

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  character: ResultsEntity;
  url: string;
  created: string;
}
