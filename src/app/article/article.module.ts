import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { MaterialModule } from "../material/material.module";
import { HomeComponent } from './home/home.component';
import { ArticleService } from '../shared/service/article.service';
import { FormsModule } from "@angular/forms";
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [ArticleComponent, HomeComponent],
  providers: [ArticleService]
})
export class ArticleModule { }
