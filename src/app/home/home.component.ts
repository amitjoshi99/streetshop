import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    login: boolean;
    signup: boolean;
    home: boolean;

  constructor() { }

  ngOnInit() {
  }
    OnclickLogin(){
        this.login = true;
        this.signup = false;
    }

    OnclickSignup(){
        this.signup = true;
        this.login = false;
    }

    OnclickHome(){
        this.login = false;
        this.signup = false;
    }

}
