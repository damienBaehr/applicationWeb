import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector:"send-message",
    standalone: true,
    imports:[FormsModule],
    template : `
    <div class="bg-slate-300 p-10 flex gap-4 w-full">
    <input [(ngModel)]="message" class="p-3 rounded-md bg-slate-50" type="text"/>
    <button (click)="send.emit(message)" class=" px-5 rounded-md bg-slate-100">SEND</button>
  </div>
  `
})

export class SendMessageComponent {
    message :string  = "";

    @Output()
    send = new EventEmitter();

    constructor(){
        this.send.subscribe(() => {
            this.message = "";
        })
    }

   
}