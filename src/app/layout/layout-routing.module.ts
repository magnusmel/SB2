import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'campaigns', loadChildren: './campaigns/campaigns.module#CampaignsModule' },
            { path: 'lists', loadChildren: './lists/lists.module#ListsModule' },
            { path: 'contacts', loadChildren: './contacts/contacts.module#ContactsModule' },
            { path: 'campstats', loadChildren: './campstats/campstats.module#CampStatsModule' },
            { path: 'camps', loadChildren: './camps/camps.module#CampsModule' },
            { path: 'settings', loadChildren: './settings/settings.module#SettingsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
