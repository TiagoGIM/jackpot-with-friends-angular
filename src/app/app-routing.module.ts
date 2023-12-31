import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CreateTicketComponent } from './pages/create-ticket/create-ticket.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { TicketListComponent } from './pages/ticket-list/ticket-list.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { SiginCardComponent } from './components/sigin-card/sigin-card.component';
import { LoginCardComponent } from './components/login-card/login-card.component';
import { HomeComponent } from './pages/home/home.component';
import { ResultsComponent } from './pages/results/results.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminGuard } from './auth/admin.guard';
import { SignatureGuard } from './auth/user-signature.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent, data: { title: 'Login' } ,children:[
    {
      path:'', component: LoginCardComponent
    }
    ,{
      path:'sigin-in', component: SiginCardComponent
    }
  ]},
  {
    path: 'ticket-list',
    component: TicketListComponent,
    canActivate: [AuthGuard, SignatureGuard],
    data: { title: 'Bilhetes' }
  },
  {  path: 'create-ticket/:id', component: CreateTicketComponent },
  { path: 'articles', component: ArticlesComponent, canActivate: [AuthGuard] },
  {path:'results', component: ResultsComponent,canActivate: [AuthGuard]},
  {path:'dashboard', component: DashboardComponent, canActivate: [AuthGuard,AdminGuard]},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
