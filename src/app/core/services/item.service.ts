import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { POSTERS } from '@core/mocks/mock-posters';
import { Poster } from '@core/models/poster';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  // private _url: string = 'posters.json';

  constructor(private http: HttpClient) {}

  // private async request(method: string, url: string, data?: any) {
  //   const result = this.http.request(method, url, {
  //     body: data,
  //     responseType: 'json',
  //     observe: 'body',
  //     headers: {
  //       // Authorization: `Bearer ${token}`
  //     }
  //   });
  //   return new Promise((resolve, reject) => {
  //     result.subscribe(resolve, reject);
  //   });
  // }

  fetchItems() {
    // return this.http.get<Poster[]>(POSTERS);
    // return of(POSTERS);
    // return this.request('GET', `${environment.dndtavernServer}/api/items`);
    return this.http
    .get(`${environment.api_url}/api/items`)
    .pipe(
      map(responseData => {
        let itemsArray: Poster[] = [];
        console.log("responseData", responseData["data"]);
        itemsArray = responseData["data"];
        return itemsArray;
    }));
    
  }
  createItems(itemData) {
    return this.http.post(`${environment.api_url}/api/items`, itemData);
  }
}
