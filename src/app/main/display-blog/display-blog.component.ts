import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-display-blog',
  templateUrl: './display-blog.component.html',
  styleUrls: ['./display-blog.component.css']
})
export class DisplayBlogComponent implements OnInit {

  @Input() Blogs;
  @Input () LoggedUser;
  @Input () fav;
  @Input () category;
  @Input () myBlogs;
  @Input () blogNameSearch;
  @Output () deleteID : EventEmitter<number> = new EventEmitter<number>();
  @Output () update : EventEmitter<object> = new EventEmitter<object>();
  @Output () favEmit : EventEmitter<number> = new EventEmitter();
  constructor() {  }

  ngOnInit() {
    console.log("inside Display "+this.Blogs);
    console.log(this.LoggedUser);
      /*this.favoriteBlog();*/

  }

  toggleFavorite(id){
    this.favEmit.emit(id);
  }

  deleteBlog(id){
    this.deleteID.emit(id);
  }
  updateBlog(blog){
    this.update.emit(blog);
  }

  showBlog(){

     /* this.favoriteBlog();*/
    // console.log(this.Blogs);
    var set:string = "block";
    var a = (<HTMLInputElement>document.getElementById("showButton"));
    a.innerHTML="<i class=\"material-icons\" >arrow_drop_up</i>Hide Blogs Content";
    var elements = document.getElementsByClassName("blogShow");
    if((<HTMLInputElement>elements[0]).style.display=="block"){
      set = "none";
      a.innerHTML = "<i class=\"material-icons\" >arrow_drop_down</i>Show Blogs Content";
    }
    for (var i = 0, len = elements.length; i < len; i++) {
      (<HTMLInputElement>elements[i]).style.display=set;
    }
    /*    if((<HTMLInputElement>document.getElementById("blogShow"+blog.id)).style.display=="block"){
      (<HTMLInputElement>document.getElementById("blogShow"+blog.id)).style.display="none";
    }
    else{
      (<HTMLInputElement>document.getElementById("blogShow"+blog.id)).style.display="block";
    }*/
  }

  /*favoriteBlog(){
    console.log(this.LoggedUser);
    for(let i = 0;i < this.LoggedUser.favorite.length; i++){
      console.log(i+" favorite"+this.LoggedUser.favorite[i]);
      (<HTMLInputElement>document.getElementById("favorite"+this.LoggedUser.favorite[i])).style.color = "red";
    }
  }*/
}
