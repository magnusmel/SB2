import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsComponent } from './lists.component';
import { ListsRoutingModule } from './lists-routing.module';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [
        CommonModule,
        ListsRoutingModule,
        PageHeaderModule
    ],
    declarations: [ListsComponent]
})
export class ListsModule { }
