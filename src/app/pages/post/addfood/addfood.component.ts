import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { foodService } from './../../../servies/food.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addfood',
  templateUrl: './addfood.component.html',
  styleUrls: ['./addfood.component.css']
})
export class AddfoodComponent implements OnInit {

  food: any = {
    name: "",
    descreption: "",
  }
  myFile :any = null
  
  constructor(private _food: foodService, private _routes: Router, private _router: ActivatedRoute) { }

  ngOnInit(): void {
  }
  
  // onUploadFile(event:any){
  //   this.myFile = event.target.files[0]
  // }
  // handleUpload(){
  //   if(this.myFile!=null){
  //   const myForm = new FormData()
  //   myForm.append("profile", this.myFile, this.myFile.name)
  //   this._food.uploadImg(myForm).subscribe(
  //     (data)=>{console.log(data)},
  //     (e)=> {console.log(e)},
  //     ()=>{}
  //   )}
  // }

  onSubmit(add: NgForm) {
    console.log(add);
    if (add.valid) {
      this._food.addFood(add.value).subscribe(
        {
          next: (res) => { console.log(res, "food added"); },
          error: (err) => console.log(err),
          complete: () => {
            this._routes.navigateByUrl("/user/AllFood")
          }
        }

      )
    }
  }
}
