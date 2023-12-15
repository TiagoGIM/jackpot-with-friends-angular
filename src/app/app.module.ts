import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuPagesComponent } from './components/menu-pages/menu-pages.component';
import { TicketNumbersSelectorComponent } from './components/ticket-numbers-selector/ticket-numbers-selector.component';
import { CreateTicketComponent } from './pages/create-ticket/create-ticket.component';
import { NumbersBallComponent } from './components/numbers-ball/numbers-ball.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuPagesComponent,
    TicketNumbersSelectorComponent,
    CreateTicketComponent,
    NumbersBallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
