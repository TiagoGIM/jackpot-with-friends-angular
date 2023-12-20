import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, catchError, of, switchMap, exhaustMap, tap } from 'rxjs';
import * as TicketsActions from './ticket.actions';
import { TicketsService } from '../../services/ticket.service';
import { ErrorHttp } from '../login/login.effects';
import { Router } from '@angular/router';

@Injectable()
export class TicketsEffects {
  loadTickets$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TicketsActions.loadTickets),
      switchMap(() =>
        this.ticketsService.loadTickets().pipe(
          map((tickets) => TicketsActions.loadTicketsSuccess({ tickets })),
          catchError((error) =>
            of(TicketsActions.loadTicketsFailure({ error }))
          )
        )
      )
    )
  );
  editTicket$ = createEffect(() =>
  this.actions$.pipe(
    ofType(TicketsActions.editActiveTicket),
    switchMap((ticket) =>
      this.ticketsService
        .updateTicket(ticket)
        .pipe(
          map((updatedTicket) =>
            TicketsActions.editActiveTicketSuccess({ updatedTicket })
          ),
          catchError((error: ErrorHttp) =>
            of(TicketsActions.editActiveTicketFailure({ error: error.statusText }))
          )
        )
    ),
    tap(() => {
      this.router.navigate(['/ticket-list']);
    })
  )
);

  constructor(
    private actions$: Actions,
    private ticketsService: TicketsService,
    private router : Router
  ) {}
}
