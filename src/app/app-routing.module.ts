import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormComponent } from "./form/form.component";
import { FormLoginComponent } from "./form/form-login/form-login.component";
import { FormRegisterComponent } from "./form/form-register/form-register.component";

const routes: Routes = [
  {
    path: "",
    component: FormComponent,
    children: [
      // {
      //   path: "login",
      //   component: FormLoginComponent
      // },
      // {
      //   path: "register",
      //   component: FormRegisterComponent
      // }
    ]
  },
  {
    path: "login",
    component: FormComponent
  },
  {
    path: "register",
    component: FormRegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {}
}
