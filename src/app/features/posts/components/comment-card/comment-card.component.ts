import { Component, Input } from '@angular/core';
import { Comment } from '../../model/post.model';
import { MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
// import { MatIcon } from '@angular/material/icon';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-comment-card',
  standalone: true,
  imports: [MatCard, MatCardHeader, MatCardContent, MatCardTitle, MatDivider, MatCardSubtitle],
  templateUrl: './comment-card.component.html',
  styleUrl: './comment-card.component.css'
})

export class CommentCardComponent {
  @Input() comment?: Comment;
}
