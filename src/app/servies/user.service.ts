import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url:string="http://localhost:3000"
  public userdata:any
  public islogin:boolean=false
  
  constructor(private _http:HttpClient) { }
  register(data:any):Observable<any>{
    return this._http.post(this.url+"/register", data)
  }
  login(data:any):Observable<any>{
    return this._http.post(this.url+"/login", data)
  }
  alluser():Observable<any>{
    return this._http.get(this.url+"/alluser")
  }
  profile():Observable<any>{
    return this._http.get(this.url+"/me") 
  }
}
