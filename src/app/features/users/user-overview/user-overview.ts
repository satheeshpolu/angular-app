import { Component, inject, resource } from '@angular/core';
import { UserService } from '../services/user-service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-user-overview',
  imports: [CommonModule,
    MatListModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    RouterLink],
  templateUrl: './user-overview.html',
  styleUrl: './user-overview.css'
})
export class UserOverview {
  private userService = inject(UserService);

  usersResource = resource({
    loader: () => firstValueFrom(this.userService.getUsers())
  });

  reload(): void {
    this.usersResource.reload();
  }
}