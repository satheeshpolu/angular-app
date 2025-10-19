import { Component, inject, resource } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, firstValueFrom, map, switchMap } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { UserService } from '../services/user-service';
import { CommonModule, Location } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { User } from '../model/user.model';

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

    user = resource<User, void>({
    loader: async () => {
      const params = await firstValueFrom(this.route.paramMap)
      const id = params.get('id')
      if(!id) throw new Error(`Unable to fetch the User details with ${id}`)
      return await firstValueFrom(this.userService.getUserById(Number(id)))
    }
  });

  reload(): void {
    this.user.reload();
  }
  
  goBack(): void {
    this.location.back();
  }
}
