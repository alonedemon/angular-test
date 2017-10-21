import { Component, OnInit } from '@angular/core';
import { Login } from "../../shared/model/login";
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:Login={};
  constructor(private route:Router) { }

  ngOnInit() {
  }
  validate(){
    console.log(this.user.username)
    if(this.user.username=="test" && 
      this.user.password=="test"){
        this.route.navigate(["/home"]);
    }
  }
}
