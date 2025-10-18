import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { UserOverview } from './user-overview/user-overview';
import { UserDetails } from './user-details/user-details';

export const routes: Routes = [
  { path: '', component: UserOverview },
  { path: 'user/:id', component: UserDetails }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UsersRoutingModule { }
