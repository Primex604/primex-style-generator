import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ellipse } from './ellipse';

describe('Ellipse', () => {
  let component: Ellipse;
  let fixture: ComponentFixture<Ellipse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ellipse]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ellipse);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
