import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CreateTicketComponent } from './pages/create-ticket/create-ticket.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { TicketListComponent } from './pages/ticket-list/ticket-list.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, data: { title: 'Login' } },
  {
    path: 'ticket-list',
    component: TicketListComponent,
    canActivate: [AuthGuard],
    data: { title: 'Bilhetes' }
  },
  {  path: 'create-ticket/:id', component: CreateTicketComponent,canActivate: [AuthGuard] },
  { path: 'articles', component: ArticlesComponent, canActivate: [AuthGuard] },
  { path: 'home', component: ArticlesComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
