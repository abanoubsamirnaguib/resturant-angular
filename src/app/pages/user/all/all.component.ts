import { Router } from '@angular/router';
import { UserService } from './../../../servies/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  constructor(private _user:UserService,private _router:Router) { }
  users:any[]=[]
  ngOnInit(): void {
    this._user.alluser().subscribe({
      next:(res)=>{this.users=res.data},
      error:(e)=>{console.log(e.message);this._router.navigateByUrl("user/login") }
    })
  }


}
