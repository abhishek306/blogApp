import {Component, OnInit} from '@angular/core';
import {BlogListService} from "./blog-list.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  /*link = {
    home:["/home"],
    about:["/about"]
  }*/
  loggedUser: object= null;
  user:string = "abhishek";
  password:string = "12345";
  constructor(private request: BlogListService, private route: Router){  }

  users: {username, password, favorite}[];

  ngOnInit(){
    this.loadUsers();
    this.loggedUser = JSON.parse(sessionStorage.getItem("loggedUser"));
    console.log(this.loggedUser);
  }

  toggleFav(updatedUser){
    this.request.updateUserData(updatedUser)
      .subscribe(event =>{
       this.loggedUser = updatedUser;
        sessionStorage.setItem("loggedUser", JSON.stringify(this.loggedUser));
      })
  }
  loadUsers(){
    this.request.loadUsers()
      .subscribe((data) =>{
        this.users = data;
        /*console.log(this.users);*/
      })
  }

  login(loginUser){
    //console.log(username+" "+pass)
    for(var i=0; i< this.users.length; i++){
      if(loginUser.name==this.users[i].username && loginUser.password==this.users[i].password){
        console.log("logged in");
        /*this.route.navigate(['/home']);*/
        this.loggedUser = this.users[i];
        sessionStorage.setItem("loggedUser", JSON.stringify(this.loggedUser));
        console.log(this.loggedUser);
      }
    }
  }
  logout(event){
    if(event){
      this.loggedUser = null;
      sessionStorage.setItem("loggedUser", null);
    }
  }
  createUser(user){
    console.log("creating user : "+user)
    this.request.newUser(user)
      .subscribe((data) =>{

      })
  }
}
