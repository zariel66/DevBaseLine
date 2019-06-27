import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiURL: string = 'http://localhost:8000';
  constructor(private httpclient:HttpClient) { }

  authenticateCredentials(username:string,password:string)
  {
    let params = new HttpParams();
    params = params.append('username', username);
    params = params.append('password', password);

    // Make the API call using the new parameters.
    return this.httpclient.get(this.apiURL + '/profile/login', { params: params });
  }
}
