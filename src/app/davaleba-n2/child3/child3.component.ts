import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.scss']
})
export class Child3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @Input() isButtonDisabled: boolean = false;
  @Output() agreeCountChange = new EventEmitter<number>();
  @Output() disagreeCountChange = new EventEmitter<number>();

  agreeClick() {
    this.isButtonDisabled = true;
    this.agreeCountChange.emit(1); // Emit the change to the parent
  }

  disagreeClick() {
    this.isButtonDisabled = true;
    this.disagreeCountChange.emit(1); // Emit the change to the parent
  }
}
