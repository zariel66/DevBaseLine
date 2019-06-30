import { Injectable } from '@angular/core';
import {  HttpParams } from '@angular/common/http';
import  { CustomHttpClient} from '../util/custom-http-client';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private httpclient:CustomHttpClient) { }

  authenticateCredentials(username:string,password:string)
  {
    let params = new HttpParams();
    params = params.append('username', username);
    params = params.append('password', password);

    // Make the API call using the new parameters.
    return this.httpclient.get(CustomHttpClient.serverUrl + '/profile/login', { params: params });
  }
}
