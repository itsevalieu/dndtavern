import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Poster } from '@core/models/poster';
import { Observable, of } from 'rxjs';
import { POSTERS } from '@core/mocks/mock-posters';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class PosterService {
  // private _url: string = 'posters.json';

  constructor(private http: HttpClient, private logger: LoggerService) {}

  getPosters(): Observable<Poster[]> {
    // return this.http.get<Poster[]>(POSTERS);
    this.logger.info('Getting Posters.');
    return of(POSTERS);
  }
}
