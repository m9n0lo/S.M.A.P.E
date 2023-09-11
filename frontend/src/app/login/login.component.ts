import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private router:Router
  ){}
  title = 'S.M.A.P.E';

  registrar(){
  this.router.navigate(['registro']);
  }

  dashboard(){
    this.router.navigate(['dashboard']);
  }
}
