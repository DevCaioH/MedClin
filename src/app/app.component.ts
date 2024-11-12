import { Component } from '@angular/core';
import { Router, RouterOutlet,NavigationEnd } from '@angular/router';
import { ProgramComponent } from "./frontend/program/program.component";
import { ChartConfiguration, ChartType } from 'chart.js';

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
  constructor(private router: Router) {}

  ngOnInit(): void {
    // Executa feather.replace() a cada navegação
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        feather.replace();
      }
    });
  }
}

