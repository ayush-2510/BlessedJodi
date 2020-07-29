import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Regform2Component } from './regform2.component';

describe('Regform2Component', () => {
  let component: Regform2Component;
  let fixture: ComponentFixture<Regform2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Regform2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Regform2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
