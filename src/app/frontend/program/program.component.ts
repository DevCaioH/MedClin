import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { BodyComponent } from "../body/body.component";

@Component({
  selector: 'app-program',
  standalone: true,
  imports: [NavbarComponent, BodyComponent],
  templateUrl: './program.component.html',
  styleUrl: './program.component.css'
})
export class ProgramComponent {

}
