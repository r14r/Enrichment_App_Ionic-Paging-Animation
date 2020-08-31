import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentBodyPage } from './content-body.page';

describe('ContentBodyPage', () => {
  let component: ContentBodyPage;
  let fixture: ComponentFixture<ContentBodyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentBodyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentBodyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
