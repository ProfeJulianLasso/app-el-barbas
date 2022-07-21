import { map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CharactersInterfe, ResultInterface } from '../models/characters.model';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  constructor(private http: HttpClient) { }

  getCharacters(): Observable<CharactersInterfe> {
    return this.http.get<CharactersInterfe>(
      `${environment.RickAndMorty_URL}/character`
    );
    // .pipe(
    //   map((response: CharactersInterfe) => {
    //     return response.results
    //   })
    // );
  }
}
