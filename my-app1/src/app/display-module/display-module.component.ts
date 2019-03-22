import { Component, OnInit } from '@angular/core';
import {HeaderBarComponent} from './../header-bar/header-bar.component';
@Component({
  selector: 'app-display-module',
  templateUrl: './display-module.component.html',
  styleUrls: ['./display-module.component.css']
})
export class DisplayModuleComponent implements OnInit {

  constructor() { }
  
  getMap: HeaderBarComponent;
  ques = this.getMap.obj.map.get("Module 1");
  ngOnInit() {
  }

}
