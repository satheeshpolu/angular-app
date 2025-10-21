import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../../../utils/api.constants';
import { Post, Comment } from '../model/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  httpClient = inject(HttpClient)
  // constructor(private httpClient: HttpClient) { }
  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(API.POSTS.BASE_URL)
  }

  getPostById(id: number): Observable<Post> {
    return this.httpClient.get<Post>(`${API.POSTS.BASE_URL}/${id}`)
  }

  getPostComments(postId: number): Observable<Comment[]>{
    return this.httpClient.get<Comment[]>(`${API.POSTS.COMMENTS}?postId=${postId}`)
  }
}
