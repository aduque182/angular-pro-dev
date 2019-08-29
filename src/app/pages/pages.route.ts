import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { ProgressComponent } from '../pages/progress/progress.component';
import { Graficas1Component } from '../pages/graficas1/graficas1.component';
import { PagesComponent } from '../pages/pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const routes: Routes = [
  {
    path: '',
     component: PagesComponent,
     children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'progress', component: ProgressComponent},
      {path: 'graficas1', component: Graficas1Component},
      {path: 'promesas', component: PromesasComponent},
      {path: 'rxjs', component: RxjsComponent},
      {path: 'account-settings', component: AccountSettingsComponent},
      {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
     ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class pages_Routes { }