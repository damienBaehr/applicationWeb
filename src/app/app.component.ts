import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SendMessageComponent } from './send-message.component';


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
  imports: [FormsModule, SendMessageComponent],
  template: `<send-message (send)="send($event)"/>`,
})
export class AppComponent {
  
  messages : string[] = [] ;

  send(message : string){
    this.messages.push(message)
    console.log("Messages envoyés",this.messages)
  }
    
}