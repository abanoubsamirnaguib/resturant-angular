import { user } from './../../../../../interfaces/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../../../../../servies/user.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  numphone: string = "123"
  userData: user = {
    name: "",
    email: "",
    phone: [""],
    address: [""],
    gender: ""
  }
  myFile: any = null

  ngOnInit(): void { }
  constructor(private _user: UserService, private _router: Router, private _routes: ActivatedRoute) {

    this._user.singleuser(this._routes.snapshot.params["id"]).subscribe({
      next: (res) => {
        this.userData = res.data
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => { console.log("user fetched") }
    })
  }
  // checkphone(phone: string) {
  //   console.log(phone);
  // }
  onUploadFile(event: any) {
    this.myFile = event.target.files[0]
  }
  onSubmit(register: NgForm) {
    console.log(register);
    if (register.valid) {
      this._user.edituser(this._routes.snapshot.params['id'], this.userData).subscribe(
        {
          next: (res) => {
            console.log(res);
            if (this.myFile != null) {
              const myForm = new FormData()
              myForm.append("filePic", this.myFile, this.myFile.name)
              register.value.foodfilePic = myForm.get('filePic')
              console.log(res.data._id);
              this._user.changeImg(res.data._id, myForm).subscribe({
                next: (res: any) => {
                  console.log(res);
                },
                error: (err) => console.log(err),
                complete: () => {
                  console.log("photo added");

                }
              })
            }
          },
          error: (err) => console.log(err),
          complete: () => {
            this._router.navigateByUrl("/user/All")
          }
        }

      )
    }
  }
}
