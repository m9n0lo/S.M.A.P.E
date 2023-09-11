import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  title = 'S.M.A.P.E';

  constructor(private router:Router){}

  login(){
    this.router.navigate(['']);
  }
}
