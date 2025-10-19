import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Contact } from './features/contact/contact';
import { UserOverview } from './features/users/user-overview/user-overview';
import { UserDetails } from './features/users/user-details/user-details';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'contact', component: Contact },
    { path: 'users', component: UserOverview },
    { path: 'users/:id', component: UserDetails },
    // { path: '**', redirectTo: '', pathMatch: 'full' }
];
