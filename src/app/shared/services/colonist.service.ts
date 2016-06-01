import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'; /* HTTP is like ajax */
import 'rxjs/add/operator/toPromise';

import { Colonist } from '../models'; /* IOccupation from shared/models/index.ts */

@Injectable()
export class ColonistService {

  colonistUrl = 'https://red-wdp-api.herokuapp.com/api/mars/colonists';

  constructor(private http: Http ) {}

  createColonist(colonist: Colonist): Promise<Colonist[]>{

    let headers = new Headers({ 'Content-Type': 'application/json'});
    let body = JSON.stringify({ colonist })

    return this.http.post(this.colonistUrl, body, { headers })
                    .toPromise()
                    .then ( response => response.json().colonist )
                    .catch(this.handleError)
  }

  private handleError(error: any){
    console.log('there was an error', error);
    return Promise.reject(error.message || error);
  }
}
