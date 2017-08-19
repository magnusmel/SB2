import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-campaigns',
    templateUrl: './campaigns.component.html',
    styleUrls: ['./campaigns.component.scss'],
    animations: [routerTransition()]
})
export class CampaignsComponent implements OnInit {
    constructor() { }
    ngOnInit() { }
}
