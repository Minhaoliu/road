import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Road1Component } from './road1.component';

describe('Road1Component', () => {
  let component: Road1Component;
  let fixture: ComponentFixture<Road1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Road1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Road1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
