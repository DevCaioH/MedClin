// app.routes.ts
import { Routes } from '@angular/router';
import { BodyComponent } from './frontend/body-exemple/body.component';
import { PacientesBodyComponent } from './frontend/pacientes/pacientes-body/pacientes-body.component';
import { AtendimentoPacienteComponent } from './frontend/pacientes/atendimento-paciente/atendimento-paciente.component';
import { ConfiguracoesProgramaComponent } from './frontend/program/configuracoes-programa/configuracoes-programa.component';

export const routes: Routes = [
  { path: '', component: BodyComponent },  // Rota padrão
  { path: 'pacientes', component: PacientesBodyComponent },
  { path: 'atendimentos', component: AtendimentoPacienteComponent },
  { path: 'configuracoes', component: ConfiguracoesProgramaComponent },
  { path: '**', redirectTo: '' },
];
