import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  @Output () loginUser: EventEmitter<object> = new EventEmitter<object>();
  @Output () newUserEmit: EventEmitter<object> = new EventEmitter<object>();
  constructor() { }



  ngOnInit() {}

  loginCheck(name, password){
    (<HTMLInputElement>document.getElementById("errorMessage")).style.display = "block";
    this.loginUser.emit({name: name, password: password});
  }

  newUser(){
    (<HTMLInputElement>document.getElementById("loginUser")).style.display = 'none';
    (<HTMLInputElement>document.getElementById("createUser")).style.display = 'block';
  }

  createUser(name, password){
    // console.log("creating user");
    this.newUserEmit.emit({username: name, password: password, favorite:[]});
    (<HTMLInputElement>document.getElementById("loginUser")).style.display = 'block';
    (<HTMLInputElement>document.getElementById("createUser")).style.display = 'none';
  }
}
