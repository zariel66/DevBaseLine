import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string = "";
  password:string = "";
  constructor(private servicioLogin:LoginService) { }

  ngOnInit() {
  }

  login()
  {
    console.log(this.username + " " + this.password);
    this.servicioLogin.authenticateCredentials(this.username,this.password)
    .subscribe((data:ServerResponse) => {
      console.log(data);
      alert(data.api_token);
    });
  }

}

interface ServerResponse
{
  api_token:string;
  http_status_code:BigInteger;
  server_message:string;
  data:JSON;
}