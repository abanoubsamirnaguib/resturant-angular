import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class foodService {

  constructor(private _http: HttpClient) { }
  url: string = "http://localhost:3000/food"


  getallfood(): Observable<any> {
    return this._http.get(this.url + "/showall");
  }
  getSinglefood(id: string): Observable<any> {
    return this._http.get(this.url + "/show/" + id);
  }
  editFood(id: any, data: any): Observable<any> {
    return this._http.patch(this.url + "/edit/" + id, data)
  }
  deleteFood(id: string): Observable<any> {
    return this._http.delete(this.url + "/delete/" + id)
  }
  addFood(data: any): Observable<any> {
    return this._http.post(this.url + "/add/", data)
  }
  uploadImg(data: any): Observable<any> {
    return this._http.post(this.url + "/addFoodPic", data)
  }
  changeImg(id: string, data: any): Observable<any> {
    return this._http.patch(this.url + "/changePic/" + id, data)
  }
  addcomment(id: string, data: any): Observable<any> {
    return this._http.post(this.url + "/AddComment/" + id, data)
  }
  addlike(id: string): Observable<any> {
    return this._http.post(this.url + "/like/" + id, null)
  }
  dislike(id: string): Observable<any> {
    return this._http.post(this.url + "/dislike/" + id, null)
  }
 
}
