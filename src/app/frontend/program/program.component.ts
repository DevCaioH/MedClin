import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-program',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './program.component.html',
  styleUrl: './program.component.css'
})
export class ProgramComponent {

}
