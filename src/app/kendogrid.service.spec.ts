import { TestBed } from '@angular/core/testing';

import { KendogridService } from './kendogrid.service';

describe('KendogridService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KendogridService = TestBed.get(KendogridService);
    expect(service).toBeTruthy();
  });
});
