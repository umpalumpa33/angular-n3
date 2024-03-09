import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DavalebaN1Component } from './davaleba-n1.component';

describe('DavalebaN1Component', () => {
  let component: DavalebaN1Component;
  let fixture: ComponentFixture<DavalebaN1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DavalebaN1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DavalebaN1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
