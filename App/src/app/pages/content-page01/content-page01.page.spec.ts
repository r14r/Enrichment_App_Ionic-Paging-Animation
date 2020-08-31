import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPage01Page } from './content-page01.page';

describe('ContentPage01Page', () => {
  let component: ContentPage01Page;
  let fixture: ComponentFixture<ContentPage01Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentPage01Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentPage01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
