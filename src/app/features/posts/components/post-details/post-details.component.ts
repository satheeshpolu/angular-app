import { Component, inject, resource } from '@angular/core';
import { Post } from '../../model/post.model';
import { firstValueFrom } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { PostCommentsComponent } from '../post-comments/post-comments.component';

@Component({
  selector: 'app-post-details.component',
  imports: [PostCommentsComponent],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css'
})
export class PostDetailsComponent {
  private route = inject(ActivatedRoute);
  private postService = inject(PostsService)

  postResource = resource<Post, void>({
    loader: async () => {
      const params = await firstValueFrom(this.route.paramMap)
      const id = params.get('id')

      if (!id) throw new Error(`Unable to fetch the User details with ${id}`)

      return await firstValueFrom(this.postService.getPostById(parseInt(id)))
    }
  });
}
