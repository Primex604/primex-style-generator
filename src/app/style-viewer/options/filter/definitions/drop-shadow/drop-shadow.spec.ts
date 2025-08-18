import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropShadow } from './drop-shadow';

describe('DropShadow', () => {
  let component: DropShadow;
  let fixture: ComponentFixture<DropShadow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropShadow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropShadow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
