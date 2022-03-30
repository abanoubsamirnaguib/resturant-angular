import { UserService } from './../../../servies/user.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private UserSer: UserService) { }
  numphone:string="123"
  ngOnInit(): void {

  }

  checkphone(phone:string){
console.log(phone);

  }
  onSubmit(register: NgForm) {
    console.log(register);
    if (register.valid) {
      // this.UserSer.register(register.value).subscribe(
      //   (res) => { console.log(res); },
      //   (err) => console.log(err),

      // )
    }
  }
}
