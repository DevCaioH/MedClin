import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import * as bootstrap from 'bootstrap';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-atendimento-paciente',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './atendimento-paciente.component.html',
  styleUrl: './atendimento-paciente.component.css'
})
export class AtendimentoPacienteComponent implements OnInit {
  dataformatada: string = ''; // Variável para armazenar a data formatada
  readonly atualDate = new Date();

  formulario = new FormGroup({
    nome_listagem: new FormControl(''),
    sobrenome_listagem: new FormControl(''),
    id_listagem: new FormControl(''),
    nascimento_listagem: new FormControl(''),
    cid_listagem: new FormControl(''),
    prontuario_listagem: new FormControl(''),
    consulta: new FormControl('', Validators.required),
    CID: new FormControl('', Validators.required),
    Data: new FormControl('', Validators.required),
  });


  fecharAlerta() {
    const alertElement = document.querySelector('#cidAlert');

    if (alertElement) {
      const alertInstance = bootstrap.Alert.getOrCreateInstance(alertElement);
      alertInstance.close();
    }
  };


  insertDataForm() {
    const dia = String(this.atualDate.getDate()).padStart(2, '0');
    const mes = String(this.atualDate.getMonth() + 1).padStart(2, '0');
    const ano = this.atualDate.getFullYear();
  
    this.dataformatada = `${dia}/${mes}/${ano}`; 
  
    this.formulario.patchValue({
      Data: this.dataformatada
    });


  }
  ngOnInit() {
    this.insertDataForm(); 
  }
}
