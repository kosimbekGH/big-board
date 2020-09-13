import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(
    private http: HttpClient
  ) { }

  save(file): Observable<any> {
    const params = new HttpParams({fromObject: {
        key: '3e6c70cd93f9efac2824bade172dddd8'
      }});
    return this.http.post('https://api.imgbb.com/1/upload', file, {params});
  }
}
