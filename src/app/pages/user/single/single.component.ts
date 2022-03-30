import { Router } from '@angular/router';
import { UserService } from './../../../servies/user.service';
import { user } from './../../../interfaces/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  user: user = {
    name: "",
    email: "",
    gender: "",
    address: [],
    phone: []
  }
  constructor(private _userSer: UserService, private _router:Router) { }
  ngOnInit(): void {
    this._userSer.profile().subscribe({
      next: (res) => {
        this.user = res.data
      },
      error: (e) => {
        console.log(e.message);
        this._router.navigateByUrl("user/login")
      }
      
    })
  }

}
