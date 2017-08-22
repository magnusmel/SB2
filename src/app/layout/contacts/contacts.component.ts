import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ContactDataService } from './contactdata.service';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss'],
    animations: [routerTransition()]
})
export class ContactsComponent implements OnInit {
	
	contactData;


	constructor(service: ContactDataService) {
		this.contactData = service.getContactData();



	}

    ngOnInit() { }
}
