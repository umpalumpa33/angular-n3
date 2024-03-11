import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DavlaebaN3Component } from './davlaeba-n3.component';

describe('DavlaebaN3Component', () => {
  let component: DavlaebaN3Component;
  let fixture: ComponentFixture<DavlaebaN3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DavlaebaN3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DavlaebaN3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
