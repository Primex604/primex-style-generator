import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClipPath } from './clip-path';

describe('ClipPath', () => {
  let component: ClipPath;
  let fixture: ComponentFixture<ClipPath>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClipPath]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClipPath);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
