import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// relative import
import { CampsRoutingModule } from './camps-routing.module';
import { CampsComponent } from './camps.component';
import { CKEditorModule } from 'ng2-ckeditor';
// Import Angular plugin.
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import {
    AlertComponent,
    ButtonsComponent,
    ModalComponent,
    CollapseComponent,
    DatePickerComponent,
    DropdownComponent,
    PaginationComponent,
    PopOverComponent,
    ProgressbarComponent,
    TabsComponent,
    TooltipComponent,
    TimepickerComponent,


} from './components';
import { PageHeaderModule } from '../../shared';
import { CampaignPageDetailDataService } from './campaignpagedetaildata.service';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CKEditorModule,
        NgbModule.forRoot(),
        PageHeaderModule,
        CampsRoutingModule,
        FroalaEditorModule.forRoot(),
        FroalaViewModule.forRoot(),
    ],

    providers: [CampaignPageDetailDataService],

    declarations: [
        CampsComponent,
        ButtonsComponent,
        AlertComponent,
        ModalComponent,
        CollapseComponent,
        DatePickerComponent,
        DropdownComponent,
        PaginationComponent,
        PopOverComponent,
        ProgressbarComponent,
        TabsComponent,
        TooltipComponent,
        TimepickerComponent
    ]
})
export class CampsModule { }
