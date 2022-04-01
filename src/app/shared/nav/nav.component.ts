import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../../servies/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public _user: UserService,private _routes:Router) { }

  ngOnInit(): void {
  }
  logout() {
    this._user.logout().subscribe({
      next: (res) => {
        this._user.userdata = null
        console.log(res)
      },
      error: (res) => {
        console.log(res)
      },
      complete: () => {
        this._user.islogin = false
        localStorage.removeItem("apptoken")
        console.log("logout")
this._routes.navigateByUrl("user/All")
      }
    })
  }
}
