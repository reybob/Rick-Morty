import { Episode } from './episode';

export interface Episodes {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: Episode [];
}
