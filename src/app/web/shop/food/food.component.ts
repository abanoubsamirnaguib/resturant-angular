import { NgForm } from '@angular/forms';
import { UserService } from './../../../servies/user.service';
import { food } from './../../../interfaces/food';
import { foodService } from './../../../servies/food.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  constructor(private _food: foodService, private _router: Router, private _routes: ActivatedRoute , public _user:UserService) { }
  food: food = {
    _id: "",
    name: "",
    descreption: "",
    price: 0,
    adds: [],
    comments: [],
    image: "",
    rate: 0,
    likes: 0
  }
  likemsg:boolean=false
  Qantity:number=0
  ngOnInit(): void {
    this._food.getSinglefood(this._routes.snapshot.params['id']).subscribe({
      next: (res) => {
        this.food = res.data
      },
      error: (e) => {
        console.log(e.message);
        this._router.navigateByUrl("user/login")
      }

    })
  }

  addcommit(comment:NgForm){
    console.log(comment);
    this._food.addcomment(this.food._id , comment.value).subscribe({
      next:(res)=>{
          console.log(res);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  like(){
    this.likemsg = !this.likemsg 
    if(this.likemsg){
      this._food.addlike(this.food._id).subscribe({
        next:(res)=>{
          console.log(res);
          this.food.likes = Number(this.food.likes) + 1
      },
      error:(err)=>{
        console.log(err);
      }
      })
    }
    else if(!this.likemsg){
      this._food.dislike(this.food._id).subscribe({
        next:(res)=>{
          console.log(res);
          this.food.likes = Number(this.food.likes) - 1
      },
      error:(err)=>{
        console.log(err);
      }
      })
    }

  }
  addTocart(){
    let cart={
      foodName: this.food.name,
      price:  this.food.price,
      quantity: this.Qantity
    }
    this._user.addToCart(cart).subscribe({
      next: (res) => {
        console.log(res);
        this._user.cart.push(res.data)
        console.log(this._user.cart);
      },
      error: (e) => {
        console.log(e.message);
        this._router.navigateByUrl("/shop")
      }
    })
  }

}
