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
import { LogoutComponent } from './pages/user/logout/logout.component';
import { EditComponent } from './pages/user/edit/edit.component';
import { SingleComponent } from './pages/user/single/single.component';
import { AllComponent } from './pages/user/all/all.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {path:"home", component:HomeComponent},
  {
     path: 'user', children: [
       { path: '', component: AllComponent },
       { path: 'register', component: RegisterComponent },
       { path: 'add', component: AddComponent },
       { path: 'addFood', component: AddfoodComponent },
       { path: 'profile', component: SingleComponent },
       { path: 'login', component: LoginComponent },
       { path: 'show/:id', component: SingleComponent },
       { path: 'edit/:id', component: EditComponent },
       { path: 'logout/:id', component: LogoutComponent },
     ]
   },
   {path:"home", component:HomeComponent},
   {path:"menu", component:MenuComponent},
   {path:"gallary", component:GalaryComponent},
   {path:"shop", component:ShopComponent},
   {path:"contentus", component:ContentusComponent},
   {path:"cart", component:CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
