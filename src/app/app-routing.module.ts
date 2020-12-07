import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrugsDetailsComponent } from './drugs-details/drugs-details.component';
import { HomeComponent } from './home/home.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PrescribersDetailsComponent } from './prescribers-details/prescribers-details.component';


const routes: Routes = [
  
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'patientDetails', component:PatientDetailsComponent},
  {path:'prescriberdetails', component:PrescribersDetailsComponent},
  {path:'drugdetails', component:DrugsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
