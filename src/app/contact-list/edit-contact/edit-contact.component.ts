import { Component, OnInit, Input, Output } from '@angular/core';
import { Person } from 'src/app/Model/person';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  @Input() aContact: Person;
  @Output() cancelChangesEmitter = new EventEmitter<number>();
  @Output() editContactEmitter = new EventEmitter<Person>();

  cancelChanges(){
    this.cancelChangesEmitter.emit(0);
  }

  submitChanges(){
    this.editContactEmitter.emit(this.aContact);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
