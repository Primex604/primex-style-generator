import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grayscale } from './grayscale';

describe('Grayscale', () => {
  let component: Grayscale;
  let fixture: ComponentFixture<Grayscale>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Grayscale]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grayscale);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
