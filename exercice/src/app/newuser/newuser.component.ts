import { Component, OnInit } from '@angular/core';
import { CallerService } from '../caller.service';
import {FormBuilder } from '@angular/forms';

import {Router} from "@angular/router";


@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {

  
  public userF: any;
  constructor(private _CallerService: CallerService,private router: Router,private formBuilder: FormBuilder) {
    this.userF = this.formBuilder.group({
      firstName: '',
      lastName: '',
      email: '',      
    });

   }

  ngOnInit(): void {
  }


  onSubmiter() {
       
    var body = {
      firstName: this.userF.value.firstName,
      lastName: this.userF.value.lastName,
      email: this.userF.value.email,
      

    };
    
    this._CallerService.addUser(body)
    .subscribe( data => {
      this.router.navigate(['/users']);
    });


  }

  

}
