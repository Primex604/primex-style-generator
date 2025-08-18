import { TestBed } from '@angular/core/testing';

import { Clippath } from './clippath';

describe('Clippath', () => {
  let service: Clippath;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Clippath);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
