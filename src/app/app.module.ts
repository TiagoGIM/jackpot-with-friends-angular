import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuPagesComponent } from './components/menu-pages/menu-pages.component';
import { CreateTicketComponent } from './pages/create-ticket/create-ticket.component';
import { NumbersBallComponent } from './components/numbers-ball/numbers-ball.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TicketsEffects } from './store/tickets/ticket.effects';
import { ticketsReducer } from './store/tickets/ticket.reducers';
import { YearFilterComponent } from './components/year-filter/year-filter.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TicketListComponent } from './pages/ticket-list/ticket-list.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { loginReducer } from './store/login/login.reducer';
import { LoginCardComponent } from './components/login-card/login-card.component';
import { LoginEffects } from './store/login/login.effects';
import { AuthInterceptorService } from './auth/auth.interceptor';
import { NumbersSelectorComponent } from './components/numbers-selector/numbers-selector.component';
import { SiginCardComponent } from './components/sigin-card/sigin-card.component';
import { HomeComponent } from './pages/home/home.component';
import { ResultsComponent } from './pages/results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuPagesComponent,
    CreateTicketComponent,
    NumbersBallComponent,
    PageNotFoundComponent,
    ArticlesComponent,
    YearFilterComponent,
    TicketListComponent,
    TicketComponent,
    LoginComponent,
    LoginCardComponent,
    NumbersSelectorComponent,
    SiginCardComponent,
    HomeComponent,
    ResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ticket: ticketsReducer }),
    EffectsModule.forRoot(TicketsEffects),
    StoreModule.forFeature('login', loginReducer),
    EffectsModule.forFeature(LoginEffects),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: false, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    
  ],
  providers: [TicketsEffects,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent],
})
export class AppModule {
}
