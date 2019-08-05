import { Component, OnInit } from '@angular/core';
import { NguoidungService } from 'src/app/service/nguoidung.service';
import Swal from 'sweetalert2';
import * as config from '../../common/Config';
@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  constructor(private nguoiDungService:NguoidungService) { }

  ngOnInit() {
  }
  dangNhap(frmValue:any){
// goi service dang nhap
this.nguoiDungService.dangNhap(frmValue.taiKhoan, frmValue.matKhau).subscribe((data)=>{
  console.log(data);
  Swal.fire(config.titleThongBao.thongBao, config.thongBaoDangNhap.thanhCong, config.iconthongBao.thanhCong);
},error =>{
  Swal.fire(config.titleThongBao.thongBao, config.thongBaoDangNhap.thatBai, config.iconthongBao.thatBai);
})
  }

}
