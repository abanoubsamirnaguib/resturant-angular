import { Router } from '@angular/router';
import { UserService } from './../../../servies/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  profileForm = new FormGroup({
    // name:new FormControl("" ,[Validators.minLength(2), Validators.maxLength(20)]),
    email: new FormControl("abanoub2@gmail.com", [Validators.email, Validators.required]),
    password: new FormControl("123456", [Validators.minLength(6), Validators.maxLength(20), Validators.required]),


  })
  constructor(private _userser: UserService, private _router:Router){ }

  ngOnInit(): void {
  }
  login(event: any) {
    console.log(this.profileForm.value);
    this._userser.login(this.profileForm.value).subscribe(
      {
        next: (res) => {
          localStorage.setItem("apptoken",res.data.token)
          this._userser.userdata=res.data.user
          console.log(res)
        },
        error: (res) => {
          console.log(res)
          this._userser.islogin=false
        },
        complete:()=>{console.log("done")
        this._userser.islogin=true
        this._router.navigateByUrl("/user")
        }

      }
    )
  }

}
