import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Poster } from './poster/poster.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PosterService {
  private _url: string = "./assets/posters.json";

  constructor(private http: HttpClient) { }

  getPosters(): Observable<Poster[]> {
    return this.http.get<Poster[]>(this._url);
  }
}
