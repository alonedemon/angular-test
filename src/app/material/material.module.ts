import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  
  MatCardModule,
  MatGridListModule
} from "@angular/material";
@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule
  ],
  declarations: [],
  exports:[MatCardModule,MatGridListModule]
})
export class MaterialModule { }
