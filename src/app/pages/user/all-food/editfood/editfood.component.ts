import { Router, ActivatedRoute } from '@angular/router';
import { foodService } from './../../../../servies/food.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editfood',
  templateUrl: './editfood.component.html',
  styleUrls: ['./editfood.component.css']
})
export class EditfoodComponent implements OnInit {
food:any={
  name:"",
  descreption:"",

}
  constructor(private _food: foodService, private _routes: Router, private _router: ActivatedRoute ) {
    this._food.getSinglefood(this._router.snapshot.params['id']).subscribe({
      next: (res) => { this.food = res.data },
      error: (e) => { console.log(e.message); this._routes.navigateByUrl("user/login") }
    })
   }

  ngOnInit(): void {
  }

  onSubmit(edit: NgForm) {
    console.log(edit);
    if (edit.valid) {
      this._food.editFood(this._router.snapshot.params['id'], this.food).subscribe(
        {
          next: (res) => { console.log(res); },
          error: (err) => console.log(err),
          complete:()=>{
            this._routes.navigateByUrl("/user/AllFood")
          }
        }

      )
    }
  }
}
