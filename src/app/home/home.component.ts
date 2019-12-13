import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clickCounter   = 0;
  name = 'Hay, ' ;
  constructor() { }

  ngOnInit() {

  }

  countClick() {
    this.clickCounter += 1;
  }

  setClasses() {
    // tslint:disable-next-line:prefer-const
    let myClasses = {
      active: this.clickCounter > 4,
      notactive: this.clickCounter <= 4
    };
    return myClasses;
  }
// tslint:disable-next-line:eofline
}