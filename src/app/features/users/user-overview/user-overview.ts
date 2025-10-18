import { Component, inject, signal } from '@angular/core';
import { UserService } from '../services/user-service';
import {User} from '../model/user.model'
import { UserDetails } from '../user-details/user-details';
@Component({
  selector: 'app-user-overview',
  imports: [UserDetails],
  templateUrl: './user-overview.html',
  styleUrl: './user-overview.css'
})
export class UserOverview {
  // private userService = inject(UserService);

  constructor(){
    // this.userService.getUsers();
    // this.fetchUsers();
  }

  // usersData = signal<User[]>([])

  // fetchUsers(): void {
  //   this.userService.getUsers().subscribe((data) => {
  //     console.log(data);
  //     // this.usersData = data
  //   })  
  // }
}
