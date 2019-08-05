import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import * as config from '../../common/Config';
import { UsersService } from 'src/app/service/users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  constructor(private UsersService:UsersService, private router:Router) { }

  ngOnInit() {
  }
  login(frmValue:any){
// goi service dang nhap
this.UsersService.login(frmValue.email, frmValue.password).subscribe((data)=>{
  // Swal.fire(config.LoginAlert.success, config.LoginAlert.success, config.iconAlert.success);
  // save in  token
   //Lưu vào token
   localStorage.setItem('userLogin',JSON.stringify(data));
   localStorage.setItem('accessToken',data.accessToken);
   this.router.navigate(['/'])
  
Swal.fire({
  position: 'center',
  type: config.iconAlert.success,
  title: config.LoginAlert.success,
  showConfirmButton: false,
  timer: 1000
})
},error =>{
  console.log(error);
  Swal.fire({
    position: 'center',
    type: config.iconAlert.fail,
    title: error.error,
    showConfirmButton: false,
    timer: 1000
  })
})
  }

}
