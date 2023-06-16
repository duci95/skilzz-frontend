import { ILogin } from './login.interface';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements ILogin {

  email = "";
  password = "";
    
  constructor (
    private http: HttpClient ) { 
    this.http = http
  }

  send() {
    alert(this.email);
  }

}
