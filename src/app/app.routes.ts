import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Contact } from './features/contact/contact';
import { UserOverview } from './features/users/user-overview/user-overview';
import { UserDetails } from './features/users/user-details/user-details';

export const routes: Routes = [
    { path: '', component: Home, title: 'Home' },
    { path: 'contact', loadComponent: () => import('./features/contact/contact').then(c => c.Contact) , title: 'Contact' },
    { path: 'users', component: UserOverview },
    { path: 'users/:id/details', component: UserDetails, title: 'User Details' },
    // { path: '**', redirectTo: '', pathMatch: 'full' }
    { path: 'posts', loadChildren: () => import('./features/posts/post-module').then(m => m.PostModule), title: 'Posts' },
    { path: 'country-app', component: UserDetails, title: 'Country App' },
];
