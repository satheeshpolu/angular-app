import { Component, inject, Input, resource } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { PostsService } from '../../services/posts.service';
import { Post, Comment } from '../../model/post.model';
import { ThisReceiver } from '@angular/compiler';
import { RouterLink } from '@angular/router';
import { CommentCardComponent } from '../comment-card/comment-card.component';

@Component({
  selector: 'app-post-comments',
  imports: [RouterLink, CommentCardComponent],
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.css']
})
export class PostCommentsComponent {
  @Input() postId?: number;

  private postService = inject(PostsService)

  commentResource = resource<Comment[], void>({
    loader: async () => {
      return await firstValueFrom(this.postService.getPostComments(this.postId ? this.postId : 0));
    }
  });
  

    // postsResource = resource<Post[], void>({
    //     loader: async () => await firstValueFrom(this.postService.getPosts())
    //   })
  // });
}
