import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaytextPage } from './displaytext.page';

describe('DisplaytextPage', () => {
  let component: DisplaytextPage;
  let fixture: ComponentFixture<DisplaytextPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaytextPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaytextPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
