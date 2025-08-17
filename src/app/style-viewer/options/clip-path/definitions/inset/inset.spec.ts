import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inset } from './inset';

describe('Inset', () => {
  let component: Inset;
  let fixture: ComponentFixture<Inset>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inset]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inset);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
