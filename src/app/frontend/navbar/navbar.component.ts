import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
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
