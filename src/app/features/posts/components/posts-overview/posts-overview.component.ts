import { Component, inject, resource } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../model/post.model';
import { firstValueFrom } from 'rxjs';
import { RouterLink } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-posts-overview.component',
  imports: [RouterLink, ScrollingModule ],
  templateUrl: './posts-overview.component.html',
  styleUrl: './posts-overview.component.css'
})
export class PostsOverviewComponent {
  postService = inject(PostsService)
  postsResource = resource<Post[], void>({
    loader: async () => await firstValueFrom(this.postService.getPosts())
  })

  trackByFn(index: number, item: any): number {
    return index;
  }
}
