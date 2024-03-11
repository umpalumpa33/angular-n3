import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-davlaeba-n3',
  templateUrl: './davlaeba-n3.component.html',
  styleUrls: ['./davlaeba-n3.component.scss']
})
export class DavlaebaN3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngColor = {};
  colorClass = {}
  colorClass1 = {}
  redClass = 'redClass';
  violetClass = 'violetClass'
  isHovered = false;
  isHovered1 = false;
  greenClass = 'greenClass'
  yellowClass = 'yellowClass'
  cyanClass = 'cyanClass'
  
  setHover(hoverChange: boolean) {
    this.isHovered = hoverChange;
    if(this.isHovered) {
      this.colorClass = this.redClass
    } else {
      this.colorClass = {}
    }
  }

  setHover1(hoverChange: boolean) {
    this.isHovered1 = hoverChange;
    if(this.isHovered1) {
      this.colorClass1 = this.violetClass
    } else {
      this.colorClass1 = {}
    }
  }

  changeHover(color: any) {
    this.redClass = color
    this.violetClass = color
}

}
