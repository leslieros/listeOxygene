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
import { AuthService } from './blog-engine-page/auth.service';
import { BlogEngineComponent } from './blog-engine-page/blog-engine/blog-engine.component';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule} from '@angular/material';
import { ProgrammeComponent } from './programme/programme.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ListMembersComponent,
    SpiritComponent,
    SupportComponent,
    FooterComponent,
    BlogEngineComponent,
    ProgrammeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatDividerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule
  ],
  entryComponents: [],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
