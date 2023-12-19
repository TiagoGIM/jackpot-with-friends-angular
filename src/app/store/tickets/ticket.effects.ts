import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, catchError, of, switchMap } from "rxjs";
import * as TicketsActions from './ticket.actions';
import { TicketsService } from "../../services/ticket.service";

@Injectable()
export class TicketsEffects {
  loadTickets$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TicketsActions.loadTickets),
      switchMap(() =>
        this.ticketsService.loadTickets()
        .pipe(
          map(tickets => TicketsActions.loadTicketsSuccess({ tickets })),
          catchError((error) => of(TicketsActions.loadTicketsFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private ticketsService: TicketsService) {}
}