import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormComponent } from './form.component';
import { FormsModule } from '@angular/forms';
import { FormRegisterComponent } from './form-register/form-register.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, FormLoginComponent, FormComponent, FormRegisterComponent],
  imports: [
    CommonModule,FormsModule,RouterModule
  ],
  exports:[FormComponent,HeaderComponent,FooterComponent,FormLoginComponent]
})
export class FormModule { }
