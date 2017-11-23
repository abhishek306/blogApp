import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BlogListService} from "../blog-list.service";
declare let $: any;

var updateID: number=-1;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
   user: object = null;
   addNewBlog: boolean = false;
   category:string = "all";
   blogSearch:string = 'all';
  blogs: Object[];
  fav: boolean = false;
  myBlogs: boolean = false;
  @Input() loggedUser;
  @Output() logoutEmit: EventEmitter<boolean> = new EventEmitter();
  @Output() updateUser: EventEmitter<object> = new EventEmitter();
  constructor(private request: BlogListService){  }

  ngOnInit(){
    this.getBlogs();
    console.log(this.loggedUser);
    $('.dropdown-button').dropdown();
  }

  logout(){
    this.logoutEmit.emit(true);
  }

  addNew(){
    if(this.addNewBlog){
     this.addNewBlog = false;
    }
    else{
      this.addNewBlog = true;
    }
  }
  searchCategory(category){
    this.myBlogs = false;
    this.fav = false;
    this.blogSearch = 'all';
     this.category = category;
     console.log(this.category+ "  "+category);
  }
  searchByName(blogName){
    this.fav = false;
    this.myBlogs = false;
    this.category = 'all';
    this.blogSearch = blogName;
  }
  getBlogs(){
    this.request.loadData()
      .subscribe((data) => {
        this.blogs = data;
      })
  }

  showMyBlogs(){
    this.category = 'all';
    this.blogSearch = 'all';
    if(!this.myBlogs){
      this.myBlogs = true;
      this.fav = false;
    }
    else{
      this.myBlogs = false;
      this.fav = false;
    }
  }
  updateBlog(blog){
    this.addNewBlog = false;
    this.addNew();
    updateID = blog.id;
    (<HTMLInputElement>document.getElementById("name")).value = blog.name;
    (<HTMLInputElement>document.getElementById("desc")).value = blog.desc;
    (<HTMLInputElement>document.getElementById("category")).value = blog.category;
    (<HTMLInputElement>document.getElementById("authname")).value = blog.author;
    (<HTMLInputElement>document.getElementById("submitButton")).innerText = "UPDATE";
  }

  addBlog(blog){
    if(updateID==-1){
      console.log("inside add");
      this.request.postData(blog)
        .subscribe((data) => {
          console.log(data);
          this.blogs.push(data);
          this.getBlogs();
        })
    }
    else{
      this.request.updateData(blog, updateID)
        .subscribe((data)=>{
          console.log("inside update"+data);
          console.log("updated blog is : "+blog)
          updateID=-1;
          this.getBlogs();
        })
    }
    (<HTMLInputElement>document.getElementById("name")).value = null;
    (<HTMLInputElement>document.getElementById("desc")).value = null;
    (<HTMLInputElement>document.getElementById("category")).value = null;
    (<HTMLInputElement>document.getElementById("authname")).value = null;
    (<HTMLInputElement>document.getElementById("submitButton")).innerText = "POST BLOG";
  }

  deleteBlog(id){
    this.request.deleteData(id)
      .subscribe(event =>{
        this.getBlogs();
      })
  }
  toggleFavorites(id){
    if(this.loggedUser.favorite.includes(id)){
      this.loggedUser.favorite.pop(id);
    }
    else{
      this.loggedUser.favorite.push(id);
    }
    this.updateUser.emit(this.loggedUser);
  }
  showFav(){
    this.category = 'all';
    this.blogSearch = 'all';
    if(this.fav){
      this.myBlogs = false;
      this.fav = false;
     }
    else {
      this.fav = true;
      this.myBlogs = false;
     }
  }
  showAllBlogs(){
    this.category = 'all';
    this.blogSearch = 'all';
    this.fav = false;
    this.myBlogs = false;
  }

}
