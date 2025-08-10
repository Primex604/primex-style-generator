import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleViewer } from './style-viewer';

describe('StyleViewer', () => {
  let component: StyleViewer;
  let fixture: ComponentFixture<StyleViewer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StyleViewer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StyleViewer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
