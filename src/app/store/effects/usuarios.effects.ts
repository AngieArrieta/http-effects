import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';
import * as usuariosActions from '../actions';




@Injectable()

export class UsuariosEffects {

    //obsevable que esta pendiente de todas las acciones que se disparan
    constructor(
        private actions$: Actions,
        private usuariosServices: UsuarioService
    ) { }

    cargarUsuarios$ = createEffect(
        () => this.actions$.pipe( // para que pase la accion que quiero estar escuchando, no todas
            ofType(usuariosActions.cargarUsuarios), // cual accion se disparo
            mergeMap( // disparar nuevo observable y que se una
                () => this.usuariosServices.getUsers() // resultado de servicio
                    .pipe(
                        map(users => usuariosActions.cargarUsuariosSuccess({ usuarios: users })),
                        catchError( err => of (usuariosActions.cargarUsuariosError({payload: err})))
                    )
            )
        )
    );

}