import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(
    public http: HttpClient,
  ) { }

  getPeople(pageNumber: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const url = environment.urlServices + `/?page=${pageNumber}&results=12&seed=abc&nat=us,es`;
    return this.http.get(url, { headers });
  }

}
