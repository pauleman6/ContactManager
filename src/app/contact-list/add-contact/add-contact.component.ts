import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Person } from 'src/app/Model/person';

@Component({
  selector: 'add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  @Output() eventEmitter = new EventEmitter<Person>();
  @Output() cancelEmitter = new EventEmitter<boolean>();
  
  fn: string = '';
  ln: string = '';
  pn: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addNewContact(){
    this.eventEmitter.emit({ fName: this.fn, lName: this.ln, phoneNumber: this.pn});
   
  }

  cancelAdd(){
    this.cancelEmitter.emit(true);
  }

}
