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
  numphone:string="123"
  ngOnInit(): void {

  }

  checkphone(phone:string){
console.log(phone);

  }
  onSubmit(register: NgForm) {
    console.log(register);
    if (register.valid) {
      this.UserSer.register(register.value).subscribe(
        (res) => { console.log(res); },
        (err) => {console.log(err)},
        () => {this._routes.navigateByUrl("user/All")}
      )
    }
  }

}
