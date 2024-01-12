import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';


@Component({
    selector: 'app-root',
    standalone: true,
    template:`
      <div class=" flex gap-5 bg-sky-900 text-white p-4">
        <a routerLink="/messenger">Chat</a>
        <a href="">Projet</a>
      </div>
      <router-outlet></router-outlet>
    `,
    imports:[RouterOutlet, CommonModule, RouterModule]
})
export class AppComponent {
  
}