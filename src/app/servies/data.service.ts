import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http:HttpClient) { }
  getdata():Observable<any>{
  return this._http.get("https://jsonplaceholder.typicode.com/todos");
  }
  getSingleData(id:number): Observable<any> {
    return this._http.get("https://jsonplaceholder.typicode.com/todos/"+id);
  }
}
