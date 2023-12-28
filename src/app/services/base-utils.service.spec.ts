import { TestBed } from '@angular/core/testing';

import { BaseUtilsService } from './base-utils.service';

describe('BaseUtilsService', () => {
  let service: BaseUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
