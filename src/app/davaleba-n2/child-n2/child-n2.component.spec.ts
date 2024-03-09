import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildN2Component } from './child-n2.component';

describe('ChildN2Component', () => {
  let component: ChildN2Component;
  let fixture: ComponentFixture<ChildN2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildN2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildN2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
