import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HueRotate } from './hue-rotate';

describe('HueRotate', () => {
  let component: HueRotate;
  let fixture: ComponentFixture<HueRotate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HueRotate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HueRotate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
