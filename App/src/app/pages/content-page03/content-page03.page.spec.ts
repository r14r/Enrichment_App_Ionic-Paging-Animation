import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPage03Page } from './content-page03.page';

describe('ContentPage03Page', () => {
  let component: ContentPage03Page;
  let fixture: ComponentFixture<ContentPage03Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentPage03Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentPage03Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
