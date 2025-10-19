import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, map, switchMap } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { UserService } from '../services/user-service';
import { CommonModule, Location } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatDividerModule, MatButtonModule],
  templateUrl: './user-details.html',
  styleUrls: ['./user-details.css']
})
export class UserDetails {
  private route = inject(ActivatedRoute);
  private userService = inject(UserService);
  private location = inject(Location)

  readonly user = toSignal(
    this.route.paramMap.pipe(
      map(params => params.get('id')),
      switchMap(id => this.userService.getUserById(Number(id))),
    )
  );

  goBack(): void {
    this.location.back();
  }
}
