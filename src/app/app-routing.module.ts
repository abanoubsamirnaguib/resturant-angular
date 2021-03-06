import { FoodComponent } from './web/shop/food/food.component';
import { EditfoodComponent } from './pages/user/all-food/editfood/editfood.component';
import { AllFoodComponent } from './pages/user/all-food/all-food.component';
import { EdituserComponent } from './pages/user/all/edit/edituser/edituser.component';
import { CartComponent } from './web/cart/cart.component';
import { ContentusComponent } from './web/contentus/contentus.component';
import { ShopComponent } from './web/shop/shop.component';
import { GalaryComponent } from './web/galary/galary.component';
import { MenuComponent } from './web/menu/menu.component';
import { HomeComponent } from './web/home/home.component';
import { AddfoodComponent } from './pages/post/addfood/addfood.component';
import { AddComponent } from './pages/post/add/add.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { LoginComponent } from './pages/user/login/login.component';
import { OrdersComponent } from './pages/user/Orders/Orders.component';
import { SingleComponent } from './pages/user/single/single.component';
import { AllComponent } from './pages/user/all/all.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {path:"home", component:HomeComponent},
  {
    path: 'user', children: [
      { path: 'All', children: [{ path: "", component: AllComponent }, { path: "edit/:id", component: EdituserComponent }] },
      { path: 'AllFood', children: [{ path: "", component: AllFoodComponent }, { path: "editFood/:id", component: EditfoodComponent }] },
      { path: 'register', component: RegisterComponent },
      { path: 'add', component: AddComponent },
      { path: 'addFood', component: AddfoodComponent },
      { path: 'profile', component: SingleComponent },
      { path: 'login', component: LoginComponent },
      { path: 'showFood/:id', component: FoodComponent },
      { path: 'Orders', component: OrdersComponent },
    ]
  },

  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "menu", component: MenuComponent },
  { path: "gallary", component: GalaryComponent },
  { path: "shop", component: ShopComponent },
  { path: "contentus", component: ContentusComponent },
  { path: "cart", component: CartComponent },
  // { path: "food", component: FoodComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
