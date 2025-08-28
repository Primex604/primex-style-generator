import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mask } from './mask';

describe('Mask', () => {
  let component: Mask;
  let fixture: ComponentFixture<Mask>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mask]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mask);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
