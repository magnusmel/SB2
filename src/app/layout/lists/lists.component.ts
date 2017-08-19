import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-lists',
    templateUrl: './lists.component.html',
    styleUrls: ['./lists.component.scss'],
    animations: [routerTransition()]
})
export class ListsComponent implements OnInit {
    constructor() { }
    ngOnInit() { }
}
