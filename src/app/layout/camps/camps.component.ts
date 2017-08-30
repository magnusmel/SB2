import { Component } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-camps',
	templateUrl: './camps.component.html',
	styleUrls: ['./camps.component.scss'],
    animations: [routerTransition()]
})


export class CampsComponent {
	
}
