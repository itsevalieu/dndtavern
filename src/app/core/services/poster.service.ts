import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Poster } from '@core/models/poster';
import { Observable, of } from 'rxjs';
import { POSTERS } from '@core/mocks/mock-posters';

@Injectable({
  providedIn: 'root',
})
export class PosterService {
  // private _url: string = 'posters.json';

  constructor(private http: HttpClient) {}

  getPosters(): Observable<Poster[]> {
    // return this.http.get<Poster[]>(POSTERS);
    return of(POSTERS);
  }
}
