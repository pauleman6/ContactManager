import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactComponent } from './contact-list/contact/contact.component';
import { EditContactComponent } from './contact-list/edit-contact/edit-contact.component';
import { AddContactComponent } from './contact-list/add-contact/add-contact.component';



@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactComponent,
    EditContactComponent,
    AddContactComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
