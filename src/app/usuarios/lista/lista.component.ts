import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import { cargarUsuarios } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html'
})
export class ListaComponent implements OnInit {

  usuarios: Usuario [] = [];
  loading: boolean = false;
  error: any;

  constructor(/* public usuarioService: UsuarioService */ private store: Store<AppState>) { }

  ngOnInit(): void {

   /*  
   // FORMA TRADICIONAL
      this.usuarioService.getUsers()
        .subscribe(users=>{
        this.usuarios = users;
      }) 
    */

    this.store.select('usuarios').subscribe(({users, loading, error}) =>{ 
      this.usuarios = users;
      this.loading = loading;
      this.error = error;
    });
    
    this.store.dispatch(cargarUsuarios());
  }

}
