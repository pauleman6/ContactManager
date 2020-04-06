import { Component, Input, Output } from '@angular/core';
import { Person } from '../../Model/person';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
    

})

export class ContactComponent{

    @Input() aContact: Person;
    @Output() deleteEmitter = new EventEmitter<string>();
    @Output() editEmitter = new EventEmitter<Person>();
   
    contructor(){

    }

    deleteContact(){
       
        this.deleteEmitter.emit(this.aContact.fName);
    }

    editContact(){
        this.editEmitter.emit(this.aContact);
        
    }

}




