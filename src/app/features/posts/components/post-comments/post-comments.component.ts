import { Component, inject, Input, resource } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { PostsService } from '../../services/posts.service';
import { Post, Comment } from '../../model/post.model';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-post-comments',
  imports: [],
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.css']
})
export class PostCommentsComponent {
  // @Input() postId = 0;
  private postId = 0;

    // private route = inject(ActivatedRoute);
  private postService = inject(PostsService)

  commentResource = resource<Comment[], void>({
    loader: async () => {
      console.log(this.postId);
      return await firstValueFrom(this.postService.getPostComments(this.postId))
    }
  });
  

    // postsResource = resource<Post[], void>({
    //     loader: async () => await firstValueFrom(this.postService.getPosts())
    //   })
  // });
}
