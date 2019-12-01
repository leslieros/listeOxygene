import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogEngineComponent } from './blog-engine-page/blog-engine/blog-engine.component';
import { DashboardComponent } from './blog-engine-page/dashboard/dashboard.component';


const routes: Routes = [
  { path: 'liste-oxygene-toulon', component: HomeComponent },
  { path: '',   redirectTo: '/liste-oxygene-toulon', pathMatch: 'full' },
  { path: 'blog-engine', component: BlogEngineComponent },
  { path: 'index.html#/blog-engine', component: BlogEngineComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'index.html#/dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
