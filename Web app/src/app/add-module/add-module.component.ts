import { Component, OnInit } from '@angular/core';
import {McqModules} from './../mcq-modules.service';
import {booksName} from './../Interface/booksName'; 
import { template } from '@angular/core/src/render3';

@Component({
  selector: 'app-add-module',
  templateUrl: './add-module.component.html',
  styleUrls: ['./add-module.component.css'],
  template:
  `<app-display-module [mMessage] = parentmessage></app-display-module>`
})
export class AddModuleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  parentmessage = "supgfzxtghjm yhghjko"
  namesarray : String[];
  public nameplease = "SUPREET";
  PM: booksName;
  addModule: McqModules;
  
  AddModule(MCQModule: McqModules) {
    this.PM.Modules.push(MCQModule);
    this.addModule = MCQModule;
  }

  //name = 'gbniokl';
  /*display() {
    name = this.PM.Modules[1].ModuleName();
  }*/


  public get findname() {
    return 'supreet';
  }
  nameIt: String = 'supreet';
  MCQModule: McqModules;
  SubmitModule() {
    this.addModule.ModuleName = 'module 1';
    this.AddModule(this.MCQModule);
  }
}
