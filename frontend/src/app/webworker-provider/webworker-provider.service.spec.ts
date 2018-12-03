import { TestBed } from '@angular/core/testing';

import { WebworkerProviderService } from './webworker-provider.service';

describe('WebworkerProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebworkerProviderService = TestBed.get(WebworkerProviderService);
    expect(service).toBeTruthy();
  });
});
