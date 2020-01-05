import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  mail: string;
  nom: string;
  objet: string;
  message: string;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  sendMail(): void {
    console.log(this.mail + this.nom + this.objet + this.message);
    const model = {mail: this.mail, nom: this.nom, objet: this.objet, message: this.message};
    this.messageService.sendMessage(model);
  }

}
