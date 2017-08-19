import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampaignsComponent } from './campaigns.component';
import { CampaignsRoutingModule } from './campaigns-routing.module';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [
        CommonModule,
        CampaignsRoutingModule,
        PageHeaderModule
    ],
    declarations: [CampaignsComponent]
})
export class CampaignsModule { }
