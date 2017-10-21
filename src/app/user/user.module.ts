import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from "../material/material.module";
import { FormsModule } from "@angular/forms";
import { UserService } from '../shared/service/user.service';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [LoginComponent],
  providers: [UserService]
})
export class UserModule { }
