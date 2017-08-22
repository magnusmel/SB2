import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

import { ListDataService } from './listdata.service';


@Component({
    selector: 'app-lists',
    templateUrl: './lists.component.html',
    styleUrls: ['./lists.component.scss'],
    animations: [routerTransition()]
})
export class ListsComponent implements OnInit {


	listData;
	

	constructor(service: ListDataService) {
		this.listData = service.getListData();
		


	}

    ngOnInit() { }
}
