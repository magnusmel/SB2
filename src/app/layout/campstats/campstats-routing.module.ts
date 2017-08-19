import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampStatsComponent } from './campstats.component';

const routes: Routes = [
	{ path: '', component: CampStatsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CampStatsRoutingModule { }
