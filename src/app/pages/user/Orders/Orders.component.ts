import { UserService } from './../../../servies/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './Orders.component.html',
  styleUrls: ['./Orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders:any
  constructor(private _user:UserService) {
     this._user.Orders().subscribe({
      next:(res)=>{
        console.log(res.data);
        this.orders=res.data
      },
      error:(err)=>{console.log(err);
      },
      complete:()=>{console.log("order fetced");
      },
    })
   }

  ngOnInit(): void {
  }

  deliver(orderStatus:boolean){
    orderStatus !== orderStatus
    console.log(orderStatus);
  }
}
