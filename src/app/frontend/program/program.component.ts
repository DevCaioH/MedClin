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


}
