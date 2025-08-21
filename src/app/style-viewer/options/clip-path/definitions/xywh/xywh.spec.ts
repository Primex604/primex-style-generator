import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Xywh } from './xywh';

describe('Xywh', () => {
  let component: Xywh;
  let fixture: ComponentFixture<Xywh>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Xywh]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Xywh);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
