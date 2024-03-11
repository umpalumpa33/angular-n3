import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-davlaeba-n1',
  templateUrl: './davlaeba-n1.component.html',
  styleUrls: ['./davlaeba-n1.component.scss']
})
export class DavlaebaN1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  item = ''

  selectItem(input: string): void {
    if (this.item === input) {
      this.item = ''; // If the same item is clicked again, unselect it
    } else {
      this.item = input;
    }
  }
}
