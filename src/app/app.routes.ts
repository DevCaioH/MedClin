// app.routes.ts
import { Routes } from '@angular/router';
import { BodyComponent } from './frontend/body-exemple/body.component';
import { PacientesBodyComponent } from './frontend/pacientes/pacientes-body/pacientes-body.component';
import { AtestadosComponentComponent } from './frontend/pacientes/atestados-component/atestados-component.component';
import { ProntuarioComponentComponent } from './frontend/pacientes/prontuario-component/prontuario-component.component';

export const routes: Routes = [
  { path: '', component: BodyComponent },  // Rota padrão
  { path: 'pacientes', component: PacientesBodyComponent },
  { path: 'atestados', component: AtestadosComponentComponent },
  { path: 'prontuarios', component: ProntuarioComponentComponent },
  { path: '**', redirectTo: '' },
];
