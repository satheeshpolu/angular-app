import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsRoutingModule } from './posts-routing.module';
import { provideHttpClient } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PostsRoutingModule
  ],
  // providers: [
  //   provideHttpClient(),
  // ],
})
export class PostModule { }
