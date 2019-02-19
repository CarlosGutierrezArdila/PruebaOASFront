import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActividadComponent } from './actividad/actividad.component';
import { ResponsableComponent } from './responsable/responsable.component';

const routes: Routes = [
  {
    path:'actividad',
    component: ActividadComponent
  },
  {
    path:'responsable',
    component: ResponsableComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
