import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-davaleba-n1',
  templateUrl: './davaleba-n1.component.html',
  styleUrls: ['./davaleba-n1.component.scss']
})
export class DavalebaN1Component implements OnInit{

  constructor() { }

  ngOnInit(): void {
  }

  majorVersion = 1;
  minorVersion = 0;
  lastMinorVersion = 0;
  parentLog: any[] = [];

  majorFunction() {
    const previousVersion = `${this.majorVersion}.${this.minorVersion}`;
    this.minorVersion = 0;
    this.majorVersion = this.majorVersion + 1;
    this.lastMinorVersion = 0;
    const logEntry = `Major changed from ${Math.floor(parseFloat(previousVersion))} to ${this.majorVersion}, 
    minor changed from ${Math.round((parseFloat(previousVersion) % 1)*10)} to 0`;
    this.parentLog.push(logEntry);
  }

  minorFunction() {
    this.lastMinorVersion = this.minorVersion;
    this.minorVersion = this.minorVersion + 1;
    const logEntry = `Minor changed from ${this.majorVersion} to ${this.minorVersion}`;
    this.parentLog.push(logEntry);
  }

  handleLogChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

}
