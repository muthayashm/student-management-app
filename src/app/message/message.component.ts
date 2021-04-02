import { Component, OnInit } from '@angular/core';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private messageService:MessageService) { }

  getMessages(){
    return this.messageService.getMessage();
  };

  reset(){
    this.messageService.clearMessages();
    this.messageService.addMessage("Messages cleared");
  }

  ngOnInit(): void {
    this.getMessages();
  }

}
