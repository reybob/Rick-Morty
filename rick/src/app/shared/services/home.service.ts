import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Episodes } from '../entities/episodes';
import { ResultsEntity } from '../entities/ResultsEntity';
import { Characters } from '../entities/Characters';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getAllEpisodes(): Observable <Episodes> {
    return this.http.get<Episodes>(
      environment.raizApi + '/episode/');
  }

  getAllCharacters(): Observable <Characters> {
    return this.http.get<Characters>(
      environment.raizApi + '/character/');
  }

  getCharactersByPage(page: number): Observable <Characters> {
    return this.http.get<Characters>(
      environment.raizApi + '/character/?page=' + page);
  }
}
