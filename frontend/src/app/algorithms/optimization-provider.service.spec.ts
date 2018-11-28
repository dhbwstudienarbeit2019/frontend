import { TestBed } from '@angular/core/testing';

import { OptimizationProviderService } from './optimization-provider.service';

describe('OptimizationProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OptimizationProviderService = TestBed.get(OptimizationProviderService);
    expect(service).toBeTruthy();
  });
});
