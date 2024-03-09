import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DavalebaN2Component } from './davaleba-n2.component';

describe('DavalebaN2Component', () => {
  let component: DavalebaN2Component;
  let fixture: ComponentFixture<DavalebaN2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DavalebaN2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DavalebaN2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
