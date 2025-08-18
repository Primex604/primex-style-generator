import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contrast } from './contrast';

describe('Contrast', () => {
  let component: Contrast;
  let fixture: ComponentFixture<Contrast>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contrast]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contrast);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
