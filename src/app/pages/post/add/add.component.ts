import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from './../../../servies/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {


  constructor(private UserSer: UserService, private _routes: Router) { }
  numphone: string = "123"
  ngOnInit(): void {}
  myFile: any = null
  checkphone(phone: string) {
    // console.log(phone);
  }
  onUploadFile(event: any) {
    this.myFile = event.target.files[0]
  }
  onSubmit(register: NgForm) {
    console.log(register);
    if (register.valid) {
      this.UserSer.register(register.value).subscribe(
        (res) => {
           console.log(res); 
           if (this.myFile != null) {
            const myForm = new FormData()
            myForm.append("filePic", this.myFile, this.myFile.name)
            register.value.foodfilePic = myForm.get('filePic')
            // console.log(add.value.foodfilePic);
            this.UserSer.changeImg(res.data._id, myForm).subscribe({
              next: (res:any) => {
                console.log(res);
              },
              error: (err) => console.log(err),
              complete: () => {
                console.log("photo added");

              }
            })
          }
        },
        (err) => { console.log(err) },
        () => { this._routes.navigateByUrl("user/All") }
      )
    }
  }

}
