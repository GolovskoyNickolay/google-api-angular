
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Geocoding {
  constructor (
    private http: Http
  ) {}

  getGecoding(data) {
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address='+data+'&sensor=true+AIzaSyDxAXCpfjkZwMjyEh0n5CI8LU6jDFSsRKE')
      .map((res:Response) => res.json());
  }

}
