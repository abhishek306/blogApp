import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import "rxjs/add/operator/map";

// const BASE_URL = 'http://localhost:3000/blogs';
// const UPDATE_URL = 'http://localhost:3000/blogs/';
// const USERS_URL  = 'http://localhost:3000/users';
// const UPDATE_USER_URL  = 'http://localhost:3000/users/';
const BASE_URL = 'api/blogs';
const UPDATE_URL = 'api/blogs/';
const USERS_URL  = 'api/users';
const UPDATE_USER_URL  = 'api/users/';
const header = {headers: new Headers({'content-Type': 'application/json'})};
@Injectable()
export class BlogListService {

  constructor(private http: Http) { }

  loadData(){
    return this.http.get(BASE_URL)
      .map(res => res.json())
  }
  loadUsers(){
    return this.http.get(USERS_URL)
      .map(res => res.json())
  }
  postData(data){
    return this.http.post(BASE_URL,data, header)
      .map(res => res.json())
  }
  updateData(data,id){
    return this.http.patch(UPDATE_URL+id,data, header)
      .map(res => res.json())
  }

  updateUserData(data){
    console.log(data);
    return this.http.patch(UPDATE_USER_URL+data.id,data, header)
      .map(res => res.json())
  }
  newUser(data){
    return this.http.post(UPDATE_USER_URL,data, header)
      .map(res => res.json())
  }

  deleteData(id){
    return this.http.delete(UPDATE_URL+id, header)
      .map(res=>res.json())
  }
}
