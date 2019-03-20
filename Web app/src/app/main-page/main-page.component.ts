import { Component, OnInit } from '@angular/core';
//import {book} from "./../interfaces/book";
//import {BookDataService} from './../book-data.service';
import {NgForm} from '@angular/forms';
import { groupBy } from 'rxjs/internal/operators/groupBy';
import {booksName} from './../interface/booksName';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  constructor(){}
  ngOnInit(){
    
  }
  public books=[{
    name:"days of our lives"
  },
  {
    name:"thjkl"
  }
]

  public CheckIfPresent(bookForm: NgForm) {
   /* let BookSubmitted = bookForm.value;
    let flag = 0;
    console.log("cgvhb gcghbnm");
    for(let bookFound of this.books) {
      if(bookFound.name == BookSubmitted) {
        flag = 1;
        document.getElementById("result").innerHTML = "Book Found";
        break;
      }
    }*/
    let flag = 0;
    if(flag == 0) {
      document.getElementById("result").innerHTML = "not Found";
    }
  }

}
/*  public showTable = false;
  public booksList: book[];
  
  constructor(private bookDataService: BookDataService) { }

  ngOnInit() {
     this.bookDataService.getLatestBooks();
  }

  public toggleTableVisibility() {
    this.showTable = !this.showTable;
  }

}*/