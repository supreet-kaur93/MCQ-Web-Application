import { Component, OnInit, Input } from '@angular/core';
import {AddModuleComponent} from '../add-module.component'
import {McqModules} from '../../mcq-modules.service'
import { booksName } from '../../Interface/booksName';

@Component({
  selector: 'app-display-module',
  templateUrl: './display-module.component.html',
  styleUrls: ['./display-module.component.css'],
  //template: `Say {{this.mMessage}}`
})
export class DisplayModuleComponent implements OnInit {

  constructor() { 
    //this.name = this.Obj.nameIt;
  }
  FinalModule: booksName;
  //Obj: AddModuleComponent;
  MModule: McqModules;
  PleaseAccept: String = "Please accept this info";
  @Input() mMessage: String;
  name: String = this.mMessage;
  //name: String = "xc vbnm, fghjkl";
  //name: String = this.mMessage;
  //this.name = 
  //name: String = this.Obj.nameIt;
  //this.name = this.obj.
  ngOnInit() {
   
    }
}