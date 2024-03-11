import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DavlaebaN4Component } from './davlaeba-n4.component';

describe('DavlaebaN4Component', () => {
  let component: DavlaebaN4Component;
  let fixture: ComponentFixture<DavlaebaN4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DavlaebaN4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DavlaebaN4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
