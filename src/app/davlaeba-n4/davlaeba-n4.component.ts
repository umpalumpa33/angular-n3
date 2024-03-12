import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-davlaeba-n4',
  templateUrl: './davlaeba-n4.component.html',
  styleUrls: ['./davlaeba-n4.component.scss']
})
export class DavlaebaN4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  trueorfalse = false
  conditionp = true
  maincontent = false
  

  changeEverything(){
    this.trueorfalse = !this.trueorfalse
    this.conditionp = !this.conditionp
    this.maincontent = !this.maincontent
  }
}
