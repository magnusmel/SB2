import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsComponent } from './contacts.component';
import { ContactsRoutingModule } from './contacts-routing.module';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [
        CommonModule,
        ContactsRoutingModule,
        PageHeaderModule
    ],
    declarations: [ContactsComponent]
})
export class ContactsModule { }
