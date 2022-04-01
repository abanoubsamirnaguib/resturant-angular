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
  userData: any = {
    name: "",
    email: "",
    phone: [""],
    address: [""],
    gender: ""
  }
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
  checkphone(phone: string) {
    console.log(phone);
  }
  onSubmit(register: NgForm) {
    console.log(register);
    if (register.valid) {

      this._user.edituser(this._routes.snapshot.params['id'], this.userData).subscribe(
        {
          next: (res) => { console.log(res); },
          error: (err) => console.log(err),
          complete:()=>{
            this._router.navigateByUrl("/user/All")
          }
        }

      )
    }
  }
}
