import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-davaleba-n2',
  templateUrl: './davaleba-n2.component.html',
  styleUrls: ['./davaleba-n2.component.scss']
})
export class DavalebaN2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isButtonDisabled: boolean = false;
  agree = 0;
  disagree = 0;

  updateAgreeCount(count: number) {
    this.agree += count;
  }

  updateDisagreeCount(count: number) {
    this.disagree += count;
  }

}
