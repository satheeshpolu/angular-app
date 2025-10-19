import { Component, inject, signal } from '@angular/core';
import { UserService } from '../services/user-service';
import { User } from '../model/user.model'
// import { UserDetails } from '../user-details/user-details';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

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
  usersData = signal<User[]>([])
  isLoading = signal<boolean>(true)

  constructor() {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.isLoading.set(true)
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.usersData.set(data)
        this.isLoading.set(false)
      },
      error: (error) => {
        console.log(error)
        this.isLoading.set(false)
      }
    })
  }
}


/**
 * export class UserOverview {
  private userService = inject(UserService);
  usersData = signal<User[]>([])

  constructor() {
    this.fetchUsers();
  }

  fetchUsers(): void {
    // Appraoch-2
    this.userService.getUsers().subscribe({
      next: (data) => this.usersData.set(data),
      error: (error) => console.log(error)
    })

    // Approach-1
    // this.userService.getUsers().subscribe((data) => {
    //   console.log(data);
    // })
  }
}
 */