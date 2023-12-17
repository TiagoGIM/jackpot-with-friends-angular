import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuPagesComponent } from './components/menu-pages/menu-pages.component';
import { TicketNumbersSelectorComponent } from './components/ticket-numbers-selector/ticket-numbers-selector.component';
import { CreateTicketComponent } from './pages/create-ticket/create-ticket.component';
import { NumbersBallComponent } from './components/numbers-ball/numbers-ball.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TicketsEffects } from './store/ticket.effects';
import { ticketsReducer } from './store/ticket.reducers';
import { YearFilterComponent } from './components/year-filter/year-filter.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuPagesComponent,
    TicketNumbersSelectorComponent,
    CreateTicketComponent,
    NumbersBallComponent,
    PageNotFoundComponent,
    ArticlesComponent,
    YearFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ ticket: ticketsReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: false, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    EffectsModule.forRoot([TicketsEffects]),
  ],
  providers: [TicketsEffects],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(){
    console.log('api',environment.apiUrl)
  }
}
