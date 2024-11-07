import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { PacientesBodyComponent } from "../pacientes-body/pacientes-body.component";

@Component({
  selector: 'app-pacientes-page',
  standalone: true,
  imports: [NavbarComponent, PacientesBodyComponent],
  templateUrl: './pacientes-page.component.html',
  styleUrl: './pacientes-page.component.css'
})
export class PacientesPageComponent {

}
