import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

// rutas
import { AppRoutingModule } from './app-routing.module';

// modulos
import { SharedModule } from './shared/shared.module';
import { UsuariosModule } from './usuarios/usuarios.module';

// componentes
import { AppComponent } from './app.component';


// ngrx
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/app.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { EffectsArray } from './store/effects';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    UsuariosModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(EffectsArray),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
