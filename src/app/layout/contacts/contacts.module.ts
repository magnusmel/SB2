import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsComponent } from './contacts.component';
import { ContactsRoutingModule } from './contacts-routing.module';
import { PageHeaderModule } from './../../shared';
import { ContactDataService } from './contactdata.service';

@NgModule({
    imports: [
        CommonModule,
        ContactsRoutingModule,
        PageHeaderModule
    ],

	providers: [ContactDataService],
	
    declarations: [ContactsComponent]
})
export class ContactsModule { }
