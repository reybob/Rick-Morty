import { ResultsEntity } from "./resultsEntity";
import { Info } from "./Info"

export interface Characters {
  info: Info;
  results?: ResultsEntity[] | null;
}