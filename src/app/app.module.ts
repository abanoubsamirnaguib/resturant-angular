import { LoginInterceptor } from './login.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterComponent } from './pages/user/register/register.component';
import { LoginComponent } from './pages/user/login/login.component';
import { EditComponent } from './pages/user/edit/edit.component';
import { AllComponent } from './pages/user/all/all.component';
import { SingleComponent } from './pages/user/single/single.component';
import { AddComponent } from './pages/post/add/add.component';
import { AddfoodComponent } from './pages/post/addfood/addfood.component';
import { LogoutComponent } from './pages/user/logout/logout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './web/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    EditComponent,
    AllComponent,
    SingleComponent,
    AddComponent,
    AddfoodComponent,
    LogoutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:LoginInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }