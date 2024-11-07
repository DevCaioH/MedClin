// app.routes.ts
import { Routes } from '@angular/router';
import { BodyComponent } from './frontend/body-exemple/body.component';
import { PacientesBodyComponent } from './frontend/pacientes/pacientes-body/pacientes-body.component';

export const routes: Routes = [
  { path: '', component: BodyComponent },  // Rota padrão
  { path: 'pacientes', component: PacientesBodyComponent },  // Rota para pacientes
];
