import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { map, catchError, of, switchMap, tap } from 'rxjs';
import * as TicketsActions from './ticket.actions';
import { TicketsService } from '../../services/ticket.service';
import { ErrorHttp } from '../login/login.effects';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class TicketsEffects {
  loadTickets$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TicketsActions.loadTickets),
      switchMap(() =>
        this.ticketsService.loadTickets().pipe(
          map((tickets) => TicketsActions.loadTicketsSuccess({ tickets })),
          catchError((error) =>
            of(TicketsActions.loadTicketsFailure({  error: error.error.message  }))
          )
        )
      )
    )
  );

  editTicket$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TicketsActions.updateTicket),
      switchMap((ticket) =>
        this.ticketsService
          .updateTicket(ticket)
          .pipe(
            map((updatedTicket) =>
              TicketsActions.editActiveTicketSuccess({ updatedTicket })
            ),
            catchError((error: HttpErrorResponse ) =>
              of(TicketsActions.editActiveTicketFailure({ error: error.error.message }))
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
    private router: Router
  ) { }
}
