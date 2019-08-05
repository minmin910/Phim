import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserLogin } from '../models/users';
import * as config from'../common/Config'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  public login(email:string, password:string):Observable<any>{
    let loginInfo=new UserLogin(email,password);
    let header = new HttpHeaders();
    header.append('Content-Type','application/json');
    const url =config.domain+'/api/user/login';
    let ob= this.http.post(url,loginInfo,{headers:header});
    return ob;
  }
  public register(email:string, password:string):Observable<any>{
    let registerInfo=new UserLogin(email,password);
    let header = new HttpHeaders();
    header.append('Content-Type','application/json');
    const url =config.domain+'/api/user/register';
    let ob= this.http.post(url,registerInfo,{headers:header});
    return ob;
  }
}
