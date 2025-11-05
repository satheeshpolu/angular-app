import { Component, inject, resource, signal, ViewChild } from '@angular/core';
import { Post } from '../../model/post.model';
import { firstValueFrom, single } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { PostCommentsComponent } from '../post-comments/post-comments.component';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-post-details.component',
  imports: [PostCommentsComponent, CurrencyPipe],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css'
})
export class PostDetailsComponent {
  private route = inject(ActivatedRoute);
  private postService = inject(PostsService)
  // Get the child component instance
  @ViewChild (PostCommentsComponent) commentComponent!: PostCommentsComponent;

  childComponentProperty = signal<string>('DEFAULT PROPERTY Data');
  postResource = resource<Post, void>({
    loader: async () => {
      const params = await firstValueFrom(this.route.paramMap)
      console.log('Route info: ', this.route)
      const id = params.get('id')

      if (!id) throw new Error(`Unable to fetch the User details with ${id}`)

      return await firstValueFrom(this.postService.getPostById(parseInt(id)))
    }
  });

  callChildMethod() {
    this.commentComponent.callFromParent();
    console.log(this.commentComponent.dummyData());
    this.childComponentProperty.set(this.commentComponent.dummyData());
    alert('Called method in Child component from Parent component');
  }
  // ngAfterViewInit() {
  //   this.commentComponent?.callFromParent();
  //   // Access dataFromChild signal from the child component
  //   // console.log('Data from child component:', this.commentComponent.callFromParent());
  // }
}
