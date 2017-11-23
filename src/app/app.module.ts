import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputBlogComponent } from './main/input-blog/input-blog.component';
import { DisplayBlogComponent } from './main/display-blog/display-blog.component';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {BlogListService} from "./blog-list.service";
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

const approutes = [
  /*{path:"", redirectTo:'/home',pathMatch:'full'},*/
  {path:"home", component: MainComponent},
  {path:"about", component: LoginComponent},
  {path:"**", component: LoginComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    InputBlogComponent,
    DisplayBlogComponent,
    LoginComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [BlogListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
