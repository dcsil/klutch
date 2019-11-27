import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayimagePage } from './displayimage.page';

describe('DisplayimagePage', () => {
  let component: DisplayimagePage;
  let fixture: ComponentFixture<DisplayimagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayimagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayimagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
