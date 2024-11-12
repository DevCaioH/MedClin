import { Component } from '@angular/core';
import { Router, RouterOutlet,NavigationEnd } from '@angular/router';
import { ProgramComponent } from "./frontend/program/program.component";

import feather from 'feather-icons';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProgramComponent, RouterOutlet],
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

