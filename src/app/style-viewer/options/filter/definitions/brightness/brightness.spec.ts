import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Brightness } from './brightness';

describe('Brightness', () => {
  let component: Brightness;
  let fixture: ComponentFixture<Brightness>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Brightness]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Brightness);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
