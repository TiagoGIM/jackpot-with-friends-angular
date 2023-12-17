import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CreateTicketComponent } from './pages/create-ticket/create-ticket.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { TicketListComponent } from './pages/ticket-list/ticket-list.component';

const routes: Routes = [
  {path: 'ticket', component: TicketListComponent},
  { path: 'articles', component: ArticlesComponent },
  { path: 'home', component: ArticlesComponent },
  { path: 'create-ticket', component: CreateTicketComponent },
  { path: '', redirectTo: '/ticket', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
