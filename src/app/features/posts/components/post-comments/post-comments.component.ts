import { ChangeDetectionStrategy, Component, inject, Input, OnInit, resource, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { PostsService } from '../../services/posts.service';
import type { Post, Comment } from '../../model/post.model';
import { ThisReceiver } from '@angular/compiler';
import { RouterLink } from '@angular/router';
import { CommentCardComponent } from '../comment-card/comment-card.component';

@Component({
  selector: 'app-post-comments',
  imports: [RouterLink, CommentCardComponent],
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostCommentsComponent implements OnInit {
  @Input() postId?: number;

    ngOnInit() {
    console.log('onInit ==> 1');
    // this.commentResource.load();
  }

  ngOnChanges() {
    console.log('ngOnChanges - postId:==>2', this.postId);
    // this.commentResource.load();
  }

  private postService = inject(PostsService)

  dataFromChild = signal<string>('Click on any comment to see data here.');

  commentResource = resource<Comment[], void>({
    loader: async () => {
      return await firstValueFrom(this.postService.getPostComments(this.postId ? this.postId : 0));
    }
  });
  
  receiveDataFromChild(comment: Comment) {
    this.dataFromChild.set(comment?.name);
    // console.log('Data received from child component:', this.dataFromChild());
  }

    // postsResource = resource<Post[], void>({
    //     loader: async () => await firstValueFrom(this.postService.getPosts())
    //   })
  // });


}
