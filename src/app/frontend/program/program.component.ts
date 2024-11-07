import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BodyComponent } from "../body-exemple/body.component";



@Component({
  selector: 'app-program',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, RouterModule, CommonModule, BodyComponent],
  templateUrl: './program.component.html',
  styleUrl: './program.component.css'
})
export class ProgramComponent {
  selectedNavItem: number = -1;
  navItems = [
    { label: 'Início', icon: 'home', href: '/'},
    { label: 'Mensagens', icon: 'message-square', href: '/'},
    { label: 'Pacientes', icon: 'users' , href: 'pacientes'},
    { label: 'Arquivos', icon: 'folder' , href: '/'},
    { label: 'Prontuários', icon: 'archive' , href: '/'},
    { label: 'Ajuda', icon: 'help-circle' , href: '/'},
    { label: 'Configurações', icon: 'settings' , href: '/'},
  ];
  selectNavItem(index: number): void {
    this.selectedNavItem = index;  // Atualiza o item selecionado

  }

}
