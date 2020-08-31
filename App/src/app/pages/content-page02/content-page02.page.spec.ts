import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPage02Page } from './content-page02.page';

describe('ContentPage02Page', () => {
  let component: ContentPage02Page;
  let fixture: ComponentFixture<ContentPage02Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentPage02Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentPage02Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
