import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DavlaebaN2Component } from './davlaeba-n2.component';

describe('DavlaebaN2Component', () => {
  let component: DavlaebaN2Component;
  let fixture: ComponentFixture<DavlaebaN2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DavlaebaN2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DavlaebaN2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
