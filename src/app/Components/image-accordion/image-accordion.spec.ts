import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageAccordion } from './image-accordion';

describe('ImageAccordion', () => {
  let component: ImageAccordion;
  let fixture: ComponentFixture<ImageAccordion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageAccordion],
    }).compileComponents();

    fixture = TestBed.createComponent(ImageAccordion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
