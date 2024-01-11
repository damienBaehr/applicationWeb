import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';


// // ---------------BASE
// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [CommonModule, RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss'
// })
// export class AppComponent {
//   title = 'testangular';
// }


// // ---------------EX 1 - Bind de propriété
// @Component({
//   selector: 'app-root',
//   standalone: true,
//   template: `
//   <h1>{{ title.toUpperCase() }}</h1>
//   <Button>Bouton</Button>
//   `,
// })
// export class AppComponent {
//   title : string = 'testangular';


//   constructor() {
//   }
// }


// // ---------------EX 2 - Bind d'évènement
// @Component({
//   selector: 'app-root',
//   standalone: true,
//   template: `
//   <h1>{{ title }}</h1>
//   <Button (click)="log()">Bouton</Button>
//   `,
// })
// export class AppComponent {
//   title : string = 'testangular';


//   constructor() {}


//   log() {
//     console.log('click');
//   }
// }


// ---------------EX 3 - Bind d'évènement'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  template: `
  <div class="bg-slate-300 p-10 flex gap-4 w-full">
    <input [(ngModel)]="message" class="p-3 rounded-md bg-slate-50" type="text"/>
    <button (click)="send()" class=" px-5 rounded-md bg-slate-100">SEND</button>
  </div>
  `,
})
export class AppComponent {
  title : string = 'mini chat';
  message = '';
  messages : string[] = [] ;
  
  constructor() {}
  
  log() {
    console.log(this.title);
  }

  editTitle(event: Event) {
    (event.target as HTMLInputElement).value;
  }

  send() {
    this.messages.push(this.message);
    this.message = '';
    console.log('Messages envoyés :',this.messages)
  }
}