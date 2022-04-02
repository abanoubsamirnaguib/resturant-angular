import {  Router } from '@angular/router';
import { food } from './../../interfaces/food';
import { foodService } from './../../servies/food.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
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

    ngOnInit() {
    }

}
