import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NguoiDungDangNhap } from '../models/nguoiDung';
import * as config from'../common/Config'

@Injectable({
  providedIn: 'root'
})
export class NguoidungService {

  constructor(private http:HttpClient) { }
  public dangNhap(taiKhoan:string, matKhau:string):Observable<any>{
    let ttDangNhap=new NguoiDungDangNhap(taiKhoan,matKhau);
    let header = new HttpHeaders();
    header.append('Content-Type','application/json-patch+json');
    const url =config.domain+'QuanLyNguoiDung/DangNhap';
    let ob= this.http.post(url,ttDangNhap,{headers:header});
    return ob;
  }
}
