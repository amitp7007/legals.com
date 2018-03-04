import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import {  HeaderComponent } from './component/ts/header.component';
import { TopMenuComponent } from './component/ts/topmenu.component';
import { LawyersComponent } from './component/ts/lawyers.component';
import { CourtComponent } from './component/ts/court.component';
import { CourtListComponent } from './component/ts/courtlist.component';
import { SidebarComponent } from './component/ts/sidebar.component';


@NgModule({
  declarations: [
    AppComponent, HeaderComponent, TopMenuComponent, LawyersComponent,
    CourtListComponent,
    CourtComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'lawyers',
        component: LawyersComponent
      },
      {
        path: 'courts',
        component: CourtListComponent
      },
      {
        path: '',
        component : LawyersComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent, TopMenuComponent,
    LawyersComponent, SidebarComponent,
    CourtListComponent,
    CourtComponent]
})
export class AppModule { }
