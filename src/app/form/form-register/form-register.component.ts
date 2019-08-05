import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';
import Swal from 'sweetalert2';
import * as config from '../../common/Config';
@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {

  constructor(private UsersService:UsersService) { }

  ngOnInit() {
  }
  register(frmValue:any){
    // call service register
    this.UsersService.register(frmValue.email, frmValue.password).subscribe((data)=>{
      Swal.fire({
        position: 'center',
        type: config.iconAlert.success,
        title: config.RegisterAlert.success,
        showConfirmButton: false,
        timer: 1500
      })
      },error =>{
        console.log(error);
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: error.error,
        })    })
  }

}
