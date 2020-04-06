import { Component, OnInit } from '@angular/core';
import {CONTACTS} from './../Data/ContactData';
import {Person} from './../Model/person';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

   list: Person[] = CONTACTS;
   showContacts : number = 0;
   editPerson: Person;
   

  constructor() { }

  addContact(){
    this.showContacts = 1;
    
  }

  listContact(){

    this.showContacts = 0;
  }

  receiveContact(p: Person){
    this.list.push(p);
    this.showContacts = 0;
  }

  removeContact(pn : string){
    let index = -1;
    for(let i = 0; i < this.list.length; i++)
    {
      let o: Person = this.list[i];
      if(o.fName == pn)
        {
          index = i;
          break;
        }

    }
   
    if(index != -1)
      this.list.splice(index, 1);
   
  }

  
  receiveCancelContact(s: number){
    this.showContacts = 0;
  }

  receiveEditContact(p : Person){
    this.showContacts = 2;
    this.editPerson = p;

    
  }

  receiveEditedContact(p : Person){
    this.showContacts = 0;
    this.removeContact(p.fName);
    this.receiveContact(p);
 
    
  }

  ngOnInit(): void {
  }

}
