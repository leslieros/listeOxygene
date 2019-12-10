import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ListMembersComponent } from './list-members/list-members.component';
import { SpiritComponent } from './spirit/spirit.component';
import { SupportComponent } from './support/support.component';
import { FooterComponent } from './footer/footer.component';
import {MaterialModule} from './blog-engine-page/material.module'
import { DashboardComponent } from './blog-engine-page/dashboard/dashboard.component';
import { PostDialogComponent } from './blog-engine-page/post-dialog/post-dialog.component';
import { AuthService } from './blog-engine-page/auth.service';
import { DataService } from './blog-engine-page/data/data.service';
import { BlogEngineComponent } from './blog-engine-page/blog-engine/blog-engine.component';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ActualitiesComponent } from './actualities/actualities.component';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ListMembersComponent,
    SpiritComponent,
    SupportComponent,
    FooterComponent,
    DashboardComponent,
    PostDialogComponent,
    BlogEngineComponent,
    PostDialogComponent,
    ActualitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatDividerModule
  ],
  entryComponents: [PostDialogComponent],
  providers: [AuthService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
