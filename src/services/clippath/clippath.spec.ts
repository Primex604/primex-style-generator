import { TestBed } from '@angular/core/testing';

import { ClipPathService } from './clippath';

describe('Clippath', () => {
  let service: ClipPathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClipPathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
