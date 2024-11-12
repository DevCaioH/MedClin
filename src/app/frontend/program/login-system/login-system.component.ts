import { DOCUMENT } from '@angular/common';
import { Component } from '@angular/core';
import { strict } from 'node:assert';
import { verify } from 'node:crypto';

@Component({
  selector: 'app-login-system',
  standalone: true,
  imports: [],
  templateUrl: './login-system.component.html',
  styleUrl: './login-system.component.css'
})
export class LoginSystemComponent {

  ngOnInit() {
    const img = document.querySelector('[winterHover]');  

      if (img){
        img.addEventListener('mousemove', () => {
          console.log('Mouse over event triggered!');
          img.setAttribute('src','/assets/img/WintLogo2.png');
        });
        img.addEventListener('mouseout', () => {
          console.log('Mouse over event triggered!');
          img.setAttribute('src','/assets/img/WintLogo.png');
        });
       
      }
    

  }
}