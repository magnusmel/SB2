import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsComponent } from './lists.component';
import { ListsRoutingModule } from './lists-routing.module';
import { PageHeaderModule } from './../../shared';
import { ListDataService } from './listdata.service';

@NgModule({
    imports: [
        CommonModule,
        ListsRoutingModule,
        PageHeaderModule
    ],

	providers: [ListDataService],
	
    declarations: [ListsComponent]
})
export class ListsModule { }
