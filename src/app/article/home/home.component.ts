import { Component, OnInit } from '@angular/core';
import { ArticleService } from "../../shared/service/article.service";
import { Article } from "../../shared/model/article";
import { Router } from "@angular/router";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articles:Article[]=[];
  defaultImage:string="https://i0.wp.com/www.homoinvestor.com/wp-content/uploads/2017/01/Los-cuatro-jinetes.png?fit=852%2C480";
  constructor(private articleService:ArticleService,
    private route:Router) { }

  ngOnInit() {
    this.articleService.getPosts().
      subscribe(
        (data)=>{
          this.articles=data;
        }
      );
  }
  nuevo(idUser:number):void{
    console.log(idUser);
    this.route.navigate(['article/new',idUser]);
  }
  editar(id:number):void{
    this.route.navigate(['article',id]);
  }

}
