//import {Injectable} from '@angular/core';
import { Component, OnInit, Injectable } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
@Injectable()
export class SignUpComponent implements OnInit {

  constructor() { 
    //var app = angular.module()
  }


  

  ngOnInit() {
  }
  public name: string = "sdxchgv";
  public password: string = "cvbm,,,m";
  //role: string = '';
  public AddUser(User: any) {
    this.name = User.target.username.value;
    this.password = User.target.password.value;
  } 
}