import { Injectable } from '@angular/core';

@Injectable({
  //here root means that it is available to whole project
  providedIn: 'root'
})
export class MessageService {
  //Created this service on 1-4-21
  messages: string[] = [];

  addMessage(message:string):void{
    this.messages.push(message);
  }

  getMessage(){
    return this.messages;
  }

  clearMessages(){
    this.messages = [];
  }

  constructor() { }
}
