import { TestBed } from '@angular/core/testing';

import { MaskService } from './mask';

describe('Mask', () => {
  let service: MaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
