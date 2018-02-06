import { Component, OnInit } from '@angular/core';
import { ContactsService } from './contact.service';

@Component({
    selector:'contact-list',
    template:`
    <ul>
      <li *ngFor="let contact of contacts | async">
        <a [routerLink]="['contact', contact.id]">{{contact.name}}</a>
      </li>
    </ul>
  `
})
export class ContactListComponent implements OnInit{
    contacts: any[];
    constructor(private contactservice: ContactsService){

    }

    ngOnInit(){
        this.contacts = this.contactservice.getContacts()
    }
}