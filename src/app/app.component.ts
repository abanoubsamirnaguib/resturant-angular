import { UserService } from './servies/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';

  constructor(private _user: UserService) {
    this._user.profile().subscribe(
      {
        next: (res) => {
          this._user.userdata = res.data
          console.log(res)
        },
        error: (res) => {
          console.log(res)
          this._user.islogin = false
        },
        complete: () => {
          console.log("done")
          this._user.islogin = true
        }
      }
    )
  }

}
