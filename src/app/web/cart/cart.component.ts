import { UserService } from './../../servies/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carts:any[]=[]
  Alltotalprice:number=0
  constructor(public _user:UserService) { 
    this._user.profile().subscribe({
      next:(res)=>{
        this.carts=res.data.carts
        // console.log(this.carts);
        // console.log(res.data.carts);
      },
      error:(err)=>{console.log(err);},
      // complete:()=>{
      //  console.log("done");
      // }
    })
  }

  ngOnInit(): void {
  }
  delete(id: string) {
    console.log(id);
    this._user.delFromCart(id).subscribe({
      next: (res) => { console.log(res, "cart deleted"); },
      error: (err) => { console.log(err); },
      complete: () => {
        this.carts = this.carts.filter((f: any) => f._id != id)
      }
    })
  }
  add(){
    console.log(this.carts);
    this.Alltotalprice = 0
    this.carts.forEach((c)=>{
      this.Alltotalprice += Number(c.totalPrice)
     })
     console.log(this.Alltotalprice);     
  }
  addToOrder(){
    if(this.carts.length>0){
      this._user.addToOrder().subscribe({
        next: (res) => { console.log(res, "adding orders"); },
        error: (err) => { console.log(err); },
        complete: () => {
          console.log("orders was added");
          this.carts=[]
        }
      })
    }
    else{
      console.log("please add to cart");
      
    }
  }

}
