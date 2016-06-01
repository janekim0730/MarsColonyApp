import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; /* HTTP is like ajax */
import 'rxjs/add/operator/toPromise';

import { IOccupation } from '../models'; /* IOccupation from shared/models/index.ts */

@Injectable()
export class OccupationService {

  occupationUrl = 'https://red-wdp-api.herokuapp.com/api/mars/jobs';

  constructor(private http: Http ) {}

  getJobs() : Promise<IOccupation[]> {
    /* it's a pattern if you are getting something from DB */
    return this.http.get(this.occupationUrl)
                .toPromise()
                .then(response => response.json().jobs)
                .catch(this.handleError)

  }
  private handleError(error: any){
    console.log('there was an error', error);
    return Promise.reject(error.message || error);
  }
}
