import {TestBed} from '@angular/core/testing';
import {BukinFunction} from './bukin-function';


describe('Bukin Function', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [BukinFunction]
  }));

  it('should be created', () => {
    const service: BukinFunction = TestBed.get(BukinFunction);
    expect(service).toBeTruthy();
  });
  it('should be 0 at f(-10,1)', () => {
    const service: BukinFunction = TestBed.get(BukinFunction);
    expect(service.func(-10, 1)).toBeCloseTo(0, 12);
  });
});
