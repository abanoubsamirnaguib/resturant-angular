import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './../../../servies/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  constructor(private _user: UserService, private _routes: Router) { }
  users: any[] = []
  ngOnInit(): void {
    this._user.alluser().subscribe({
      next: (res) => { this.users = res.data },
      error: (e) => { console.log(e.message); this._routes.navigateByUrl("user/login") }
    })
  }

  delete(id: string) {
    console.log(id);
    this._user.deleteUser(id).subscribe({
      next:(res)=>{console.log(res,"deleted");},
      error:(err)=>{console.log(err);},
      complete:()=>{
        this.users=this.users.filter((f:any)=>f._id != id) 
      }
    })
  }
}
