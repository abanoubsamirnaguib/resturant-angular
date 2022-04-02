import { Router } from '@angular/router';
import { UserService } from './servies/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';

  constructor(private _user: UserService, private _router: Router) {
    this._user.profile().subscribe(
      {
        next: (res) => {
          this._user.userdata = res.data
          console.log(res)
          // console.log(this._user.userdata.email);
        },
        error: (res) => {
          console.log(res)
          this._user.islogin = false
        },
        complete: () => {
          console.log("done")
          this._user.islogin = true
          if (this._user.userdata.email == 'superadmin@gmail.com') {
            this._user.isAdmin = true;
            console.log("admin");
            this._router.navigateByUrl("/user/All")
          }else{
            this._user.isAdmin = false;
            this._router.navigateByUrl("/shop")
          }
        }
      }
    )
  }

}
