import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProgramComponent } from "./frontend/program/program.component";

import feather from 'feather-icons';
import { LoginSystemComponent } from "./frontend/program/login-system/login-system.component";
import { AtendimentoPacienteComponent } from "./frontend/pacientes/atendimento-paciente/atendimento-paciente.component";
import { ConfiguracoesProgramaComponent } from "./frontend/program/configuracoes-programa/configuracoes-programa.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProgramComponent, RouterOutlet, LoginSystemComponent, AtendimentoPacienteComponent, ConfiguracoesProgramaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'siscram';
  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      // Garantir que o código seja executado apenas no navegador
      feather.replace();
    }
  }
}
