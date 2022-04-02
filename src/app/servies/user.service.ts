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
  public isAdmin:boolean=false
  public cart: any[]=[]

  constructor(private _http:HttpClient) { }
  register(data:any):Observable<any>{
    return this._http.post(this.url+"/register", data)
  }
  login(data:any):Observable<any>{
    return this._http.post(this.url+"/login", data)
  }
  logout():Observable<any>{
    return this._http.post(this.url+"/logout",null)
  }
  logoutAll():Observable<any>{
    return this._http.post(this.url+"/logoutAll" , null)
  }
  alluser():Observable<any>{
    return this._http.get(this.url+"/alluser")
  }
  singleuser(id:string):Observable<any>{
    return this._http.get(this.url+"/user/"+id)
  }
  edituser(id:any , data:any):Observable<any>{
    return this._http.patch(this.url+"/editUser/"+id , data)
  }
  deleteUser(id:string):Observable<any>{
    return this._http.delete(this.url+"/deleteUser/"+id)
  }
  profile():Observable<any>{
    return this._http.get(this.url+"/me") 
  }
  changeImg(id:string , data:any): Observable<any> {
    return this._http.patch(this.url + "/changePic/"+id, data )
  }
  Orders(): Observable<any> {
    return this._http.get(this.url + "/allOrder" )
  }
  addToCart(data:any): Observable<any> {
    return this._http.post(this.url + "/addToCart", data)
  }
  delFromCart(id:string): Observable<any> {
    return this._http.delete(this.url + "/delFromCart/"+id)
  }
  addToOrder(): Observable<any> {
    return this._http.post(this.url + "/AddToOrder/",null)
  }
}
