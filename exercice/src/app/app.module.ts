import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavComponent } from './nav/nav.component';
import {  ReactiveFormsModule } from '@angular/forms';


import { CallerService } from './caller.service';
import { HttpClientModule } from '@angular/common/http'
import { AuthGuard } from './auth.guard'
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ItijuanaComponent } from './itijuana/itijuana.component';
import { NewuserComponent } from './newuser/newuser.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    
    NavComponent,
    
        
    HomeComponent,
    UsersComponent,
    ItijuanaComponent,
    NewuserComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path:'',
        component:HomeComponent
      }     
      ,
      {
        path:'users',
        component:UsersComponent,        
      },
      
      {
        path:'newuser',
        component:NewuserComponent
      }  
,
      
      {
        path:'user/:id',
        component:UserComponent
      }                       
    ])
    
  ],
  providers: [CallerService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
