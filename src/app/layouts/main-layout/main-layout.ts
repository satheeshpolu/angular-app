import { Component } from '@angular/core';
import { TopNavbar } from '../top-navbar/top-navbar';
import { UserOverview } from '../../features/users/user-overview/user-overview';
import { Footer } from '../footer/footer';
// import { UsersModule } from '../../features/users/users-module-delete';

@Component({
  selector: 'app-main-layout',
  imports: [TopNavbar, UserOverview, Footer],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
  standalone: true
})
export class MainLayout {

}
