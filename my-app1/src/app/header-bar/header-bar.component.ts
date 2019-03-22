import { Component, OnInit } from '@angular/core';
import {ModuleAvailableService} from './../module-available.service'
import {Question} from './../interfaces/Questions'

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {
  }

  
  obj: ModuleAvailableService;

  //Ques: Question;
  array : Question[];
  AddModule() {
    this.obj.map.set(this.obj.ModuleName, this.array);
    alert('working add module');
  }


  NewQues: Question;
  AddQuestion() {
    let q = this.obj.map.get(this.obj.ModuleName);
    /*q.Question = this.NewQues.Question;
    q.Option_1 = this.NewQues.Option_1;
    q.Option_2 = this.NewQues.Option_2;
    q.Option_3 = this.NewQues.Option_3;
    q.Option_4 = this.NewQues.Option_4;
    q.Answer = this.NewQues.Answer;*/
    q.add(this.NewQues);
    this.obj.map.set(this.obj.ModuleName, q);
    alert('Working Add Question');
    //q.selected = this.NewQues.Option_1;
  }
}
