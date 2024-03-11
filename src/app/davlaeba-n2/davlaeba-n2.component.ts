import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-davlaeba-n2',
  templateUrl: './davlaeba-n2.component.html',
  styleUrls: ['./davlaeba-n2.component.scss']
})
export class DavlaebaN2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngColor = {};
  colorClass = {}
  redClass = 'redClass';
  isHovered = false;
  greenClass = 'greenClass'
  yellowClass = 'yellowClass'
  cyanClass = 'cyanClass'
  
  setHover(hoverChange: boolean) {
    this.isHovered = hoverChange;
    console.log(this.isHovered)
    if(this.isHovered) {
      this.colorClass = this.redClass
    } else {
      this.colorClass = {}
    }
  }

  changeHover(color: any) {
    this.redClass = color
}
}
