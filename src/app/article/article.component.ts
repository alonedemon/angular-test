import { Component, OnInit } from '@angular/core';
import { Article } from "../shared/model/article";
import { ArticleService } from "../shared/service/article.service";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  titleForm:string="Nuevo articulo";
  article:Article={};
  type:string="new";
  typeButton:string="Nuevo";
  message:string;
  constructor(private articleService:ArticleService,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    let id=this.route.snapshot.params['id'];
    if(id){
      this.titleForm="Editar articulo";
      this.type="edit";
      this.typeButton="Editar";
      this.loadArticle(id);
    }
    else{
      id=this.route.snapshot.params['idUser'];
      this.article.userId=id;
    }
  }
  validate(){
    if(this.type=="edit"){
      this.articleService.update(this.article)
        .subscribe(
          ()=>{
           this.message="Articulo editado"; 
          },
          ()=>{
            this.message="No se pudo editar el articulo"; 
          }
        );
    }
    else{
      this.articleService.create(this.article)
        .subscribe(
          ()=>{
          this.message="Articulo creado"; 
          },
          ()=>{
            this.message="No se pudo crear el articulo"; 
          }
        );
    }
  }
  cancel():void{
    if(this.type=="edit"){
      this.loadArticle(this.article.id);
    }
    else{
      this.article={};
    }
  }
  private loadArticle(id:number):void{
    this.articleService.getPost(id)
    .subscribe(
      (data)=>{
        this.article=data;
      }
    );
  }
}
