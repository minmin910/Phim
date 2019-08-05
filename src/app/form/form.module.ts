import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, FormLoginComponent, FormComponent],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[FormComponent,HeaderComponent,FooterComponent,FormLoginComponent]
})
export class FormModule { }
