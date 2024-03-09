import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-n1',
  templateUrl: './child-n1.component.html',
  styleUrls: ['./child-n1.component.scss']
})
export class ChildN1Component implements OnInit, OnChanges{

  constructor() { }

  ngOnInit(): void {}


  ngOnChanges(changes: SimpleChanges): void {
    this.logChanged.emit(changes);
  }


  @Input() majorVersion: number = 0;
  @Input() minorVersion: number = 0;
  @Input() log: any[] = [];
  @Output() logChanged: EventEmitter<SimpleChanges> = new EventEmitter<SimpleChanges>();


}
