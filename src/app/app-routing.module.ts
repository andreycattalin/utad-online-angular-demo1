import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageServicesComponent } from './page-services/page-services.component';
import { PageContactComponent } from './page-contact/page-contact.component';

const routes: Routes = [
  { path: '', component: PageHomeComponent },
  { path: 'services', component: PageServicesComponent },
  { path: 'contact', component: PageContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
