import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildN1Component } from './child-n1.component';

describe('ChildN1Component', () => {
  let component: ChildN1Component;
  let fixture: ComponentFixture<ChildN1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildN1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildN1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
