import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./user/index";
import { ArticleComponent,HomeComponent } from "./article/index";
const routes: Routes = [
  {
    path:"",
    redirectTo:"login",
    pathMatch:"full"
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"article/:id",
    component:ArticleComponent
  },
  {
    path:"article/new/:idUser",
    component:ArticleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
