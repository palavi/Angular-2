import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import * as Rx from 'rxjs';

let contacts = [
    { id: 1, name: 'Pascal Precht', twitter: '@PascalPrecht' },
    { id: 2, name: 'Christoph Burgdorf', twitter: '@cburgdorf' },
    { id: 3, name: 'Thomas Burleson', twitter: '@thomasburleson' },
    { id: 4, name: 'Dominic Elm', twitter: '@elmd_' }
  ];

  
@Injectable()
export class ContactsService {
    getContacts(){
        return Observable.create(observer => {
            observer.next(contacts);
        });
    }

    getContact(id){
        return Observable.create(observer =>{
            setTimeout(()=>{
                observer.next(contacts.find((contact) => contact.id == id))
                observer.complete();
<<<<<<< HEAD
            }, 500);
=======
            }, 3000);
>>>>>>> 1e8d15d3789cfc0db93446424201c64cd8e812ce
        });
    }
    
}