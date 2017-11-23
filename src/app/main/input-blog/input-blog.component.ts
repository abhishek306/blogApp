import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-blog',
  templateUrl: './input-blog.component.html',
  styleUrls: ['./input-blog.component.css']
})
export class InputBlogComponent implements OnInit {
@Output () emitBlog : EventEmitter<object> = new EventEmitter<object>();
selected: string;
  constructor() { }

  newBlog(name, author, desc, category){
    this.emitBlog.emit({name:name,author: author, desc: desc, category: category, authorId: (JSON.parse(sessionStorage.getItem("loggedUser")).id)});
  }
  ngOnInit() {
  }

}
