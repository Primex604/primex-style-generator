import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Saturate } from './saturate';

describe('Saturate', () => {
  let component: Saturate;
  let fixture: ComponentFixture<Saturate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Saturate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Saturate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
