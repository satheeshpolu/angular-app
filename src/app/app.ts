import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';
import { Footer } from './layouts/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainLayout],
  // imports: [RouterOutlet, MainLayout,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
  // standalone: true,   
})
export class App {
  protected readonly title = signal('users-app');
}
