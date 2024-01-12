import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SendMessageComponent } from './send-message.component';
import { HttpClient } from '@angular/common/http';
import { fromEvent } from 'rxjs';
import { animate, style, transition, trigger } from '@angular/animations';

interface Message {
  username : string;
  content: string;
}

interface DadJoke {
  id: string;
  joke: string;
  status : number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  animations:[
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity:0}),
        animate('150ms', style({opacity: 1}))
      ])
    ] )
  ],
  imports: [FormsModule, SendMessageComponent, CommonModule],
  template: `
  @if(logged){
    <send-message (send)="send($event)"/>
  }@else { 
    <input class="border border-slate-600 p-2 m-2" type="text" [(ngModel)]="username">
    <button (click)="login()">Connexion</button>
  }
  <button (click)='getDadJoke()'>getDadJoke</button>
  @for (item of messages; track $index){
    <div @fadeIn class="p-4 rounded m-4" [ngClass]="item.username === 'dad' ? 'bg-slate-400 ml-16' : 'bg-slate-100' ">
      <p class="font-bold">{{ item.username }}</p>
      <p>{{ item.content }}</p>
    </div>
  }
  `,
})
export class AppComponent {
  
  messages : Message[] = [] ;
  logged : boolean = false;
  username = "";
  http = inject(HttpClient);

  constructor( ) { 
    fromEvent(window, 'storage').subscribe((event) => {
      let messages = localStorage.getItem("messages");
      if(messages){
        let parsedMessages = JSON.parse(messages)
        this.messages = parsedMessages
      }
    });
  }

  send(message : string){
    if(this.username){
      this.messages.push({username : this.username, content : message})
      localStorage.setItem("messages", JSON.stringify(this.messages))
    }
    console.log("Messages envoyés",this.messages)
  }

  login(){
    if(this.username){
      this.logged = true;
    }
  }

  getDadJoke(){
    this.http.get<DadJoke>("https://icanhazdadjoke.com/", {headers : {"Accept": "application/json"}}).subscribe(e => {
      let message : Message = {username : "dad", content: e.joke}
      this.messages.push(message)
    })
  }
    
}