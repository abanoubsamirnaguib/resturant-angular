import { foodService } from './../../servies/food.service';
import { Router } from '@angular/router';
import { food } from './../../interfaces/food';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  foods: food[] = [{
    _id: "",
    name: "",
    descreption: "",
    price: 0,
    adds: [],
    comments: [],
    image: "",
    rate: 0,
    likes: 0
  }]
  constructor(private _food: foodService, private _routes: Router) { 
    this._food.getallfood().subscribe({
      next: (res) => { this.foods = res.data },
      error: (e) => { console.log(e.message); this._routes.navigateByUrl("user/login") }
    })
  }
  ngOnInit(): void {
  }


}
