import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importamos el componente inicial 
import { AutosComponent } from './components/autos.component';
// Importamos el componente para visualizar un registro
import { AutosVerComponent } from './components/autos-ver.component';
//
import { AutosAgregaComponent } from './components/auto-agrega.component';
import { AutosModificaComponent } from './components/autos-modifica.component';
 
 const appRoutes: Routes = [
     {path:'', component:AutosComponent},
     {path:'auto/:id', component:AutosVerComponent},
     {path:'crear-auto', component:AutosAgregaComponent},
     {path:'modificar-auto/:id', component:AutosModificaComponent},
     {path:'**', component:AutosComponent}

 ];

 export const appRoutingProviders: any[] = [];
 export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);