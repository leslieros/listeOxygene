import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProgrammeComponent } from './programme/programme.component';
import { ContactPageComponent } from './contact-page/contact-page.component';


const routes: Routes = [
  { path: 'liste-oxygene-toulon', component: HomeComponent},
  { path: '',   redirectTo: '/liste-oxygene-toulon', pathMatch: 'full' },
  { path: 'programme', component: ProgrammeComponent},
  { path: 'contact', component: ContactPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
