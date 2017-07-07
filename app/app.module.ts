//Carga de modulos, componentes, directivas y el componente principal
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { AppComponent }  from './app.component';
import { AutosComponent }  from './components/autos.component';
import { AutosAgregaComponent }  from './components/auto-agrega.component';
import { AutosModificaComponent }  from './components/autos-modifica.component';

import {ModalModule, OverlayRenderer, DOMOverlayRenderer, Overlay} from 'angular2-modal';
import { Modal, BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

const MODAL_PROVIDERS = [
  Modal,
  Overlay,
  { provide: OverlayRenderer, useClass: DOMOverlayRenderer }
];

//Peticiones HTTP y Parseo de Objetos JSON
import { HttpModule,JsonpModule } from '@angular/http';

import { AutosVerComponent }  from './components/autos-ver.component';
import { routing, appRoutingProviders }  from './app.routing';
 
@NgModule({
  imports:      [ BrowserModule,
                  FormsModule, 
                  HttpModule, 
                  JsonpModule, 
                  routing,
                  ModalModule,
                  BootstrapModalModule ],
  declarations: [ AppComponent, 
                  AutosComponent, 
                  AutosVerComponent, 
                  AutosAgregaComponent, 
                  AutosModificaComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
                  MODAL_PROVIDERS
  ]
})
 
export class AppModule { }