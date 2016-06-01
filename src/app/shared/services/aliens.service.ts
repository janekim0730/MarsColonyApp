import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; /* HTTP is like ajax */
import 'rxjs/add/operator/toPromise';

import { IAlien } from '../models'; /* IOccupation from shared/models/index.ts */

@Injectable()
export class AlienService {

  aliensUrl = 'https://red-wdp-api.herokuapp.com/api/mars/aliens';

  constructor(private http: Http ) {}

  getAliens() : Promise<IAlien[]> {
    /* it's a pattern if you are getting something from DB */
    return this.http.get(this.aliensUrl)
                .toPromise()
                .then(response => response.json().aliens)
                .catch(this.handleError)

  }
  private handleError(error: any){
    console.log('there was an error', error);
    return Promise.reject(error.message || error);
  }
}
