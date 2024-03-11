import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DavlaebaN1Component } from './davlaeba-n1.component';

describe('DavlaebaN1Component', () => {
  let component: DavlaebaN1Component;
  let fixture: ComponentFixture<DavlaebaN1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DavlaebaN1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DavlaebaN1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
