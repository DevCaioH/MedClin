import { Component } from '@angular/core';
import { RouterModule, RouterOutlet} from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet, CommonModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  selectedNavItem: number = -1;

  navItems = [
    { label: 'Início', icon: 'home', href: '/'},
    { label: 'Mensagens', icon: 'message-square', href: '/'},
    { label: 'Pacientes', icon: 'users' , href: '/pacientes'},
    { label: 'Atestados', icon: 'folder' , href: '/atestados'},
    { label: 'Prontuarios', icon: 'archive' , href: '/prontuarios'},
    { label: 'Receitas', icon: 'clipboard' , href: '/receitas'},
    { label: 'Ajuda', icon: 'help-circle' , href: '/'},
    { label: 'Configurações', icon: 'settings' , href: '/configuracoes'},
  ];
  selectNavItem(index: number): void {
    this.selectedNavItem = index;  // Atualiza o item selecionado
  }
  
  
}
