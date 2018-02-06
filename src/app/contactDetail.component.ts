import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from './contact.service'; 
@Component({
    selector:'contact-detail',
    template:`
    <h2>{{contact.name}}</h2>
    
    <dl>
      <dt>Twitter</dt>
      <dd>{{contact.twitter}}</dd>
    </dl>
    
    <p><a routerLink="/">Back to list</a></p>
  `
})
export class ContactDetailComponent implements OnInit{
    contact;
    // constructor(private contactservice: ContactsService, private route: ActivatedRoute){
        constructor(private route: ActivatedRoute){
    }

    ngOnInit(){
        // this.contactservice.getContact(this.route.snapshot.params['id'])
        // .subscribe(contact => this.contact = contact);
        this.contact = this.route.snapshot.data['contact'];
    }
}