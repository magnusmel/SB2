import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { CampStatsRoutingModule } from './campstats-routing.module';
import { CampStatsComponent } from './campstats.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        Ng2Charts,
        CampStatsRoutingModule,
        PageHeaderModule
    ],
    declarations: [CampStatsComponent]
})
export class CampStatsModule { }
