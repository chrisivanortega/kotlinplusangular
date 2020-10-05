import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';
import { Observable } from 'rxjs';
import {User } from "./User"
@Injectable({
  providedIn: 'root'
})
export class CallerService {

  constructor(private _http: HttpClient) { }

  springboot = 'http://ec2-52-53-184-100.us-west-1.compute.amazonaws.com:8080'

  getUsers() {
    /* calling the api to get users */    
   return this._http.get<any[]>(this.springboot + '/User');    
   
  } 

  addUser(body:any) {
    /* calling the api to get users */    
   return this._http.post<any[]>(this.springboot + '/User',body);    
   
  }   

  getUserById(id:string) {
    /* calling the api to get users */    
   return this._http.get<User>(this.springboot + '/User/'+id);    
   
  }   

  updateUser(body:any){
    return this._http.put<any[]>(this.springboot + '/User/'+body.id,body);    

  }

  delete(id: string) {
    /* calling the api to get users */    
   return this._http.delete<any[]>(this.springboot + '/User/'+id);    
   
  }   


}
