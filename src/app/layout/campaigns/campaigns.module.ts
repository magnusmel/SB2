import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CampaignsComponent } from './campaigns.component';
import { CampaignsRoutingModule } from './campaigns-routing.module';
import { PageHeaderModule } from './../../shared';


@NgModule({
    imports: [

		FormsModule,
		ReactiveFormsModule,
        CommonModule,
        CampaignsRoutingModule,
        PageHeaderModule
    ],
	declarations: [
		CampaignsComponent,
		
	]
})
export class CampaignsModule { }



