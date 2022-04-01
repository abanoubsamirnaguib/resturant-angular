import { foodService } from './../../../servies/food.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-food',
  templateUrl: './all-food.component.html',
  styleUrls: ['./all-food.component.css']
})
export class AllFoodComponent implements OnInit {
  numphone: string = "123"
  foods: any =[]
  constructor(private _food: foodService, private _routes: Router) {
    this._food.getallfood().subscribe({
      next:(res)=>{this.foods=res.data},
      error: (e) => { console.log(e.message); this._routes.navigateByUrl("user/login") }
    })
   }

  ngOnInit(): void {}
  delete(id: string) {
    console.log(id);
    this._food.deleteFood(id).subscribe({
      next:(res)=>{console.log(res,"deleted");},
      error:(err)=>{console.log(err);},
      complete:()=>{
        this.foods=this.foods.filter((f:any)=>f._id != id) 
      }
    })
  }
}
