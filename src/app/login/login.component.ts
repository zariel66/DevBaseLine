import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { ServerResponse} from '../util/server-response'
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
      let jsonResponse = JSON.parse(JSON.stringify(data.body) );
      
      //let api_token = jsonResponse.api_token;
      //console.log(api_token);
      console.log(jsonResponse);
      alert(jsonResponse.api_token);
    });
  }

}

