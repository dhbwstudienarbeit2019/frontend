import {TestBed} from '@angular/core/testing';
import {SphereFunction} from './sphere-function';


describe('BoothFunction', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [SphereFunction]
  }));

  it('should be created', () => {
    const service: SphereFunction = TestBed.get(SphereFunction);
    expect(service).toBeTruthy();
  });
  it('should be 0 at f(0,0)', () => {
    const service: SphereFunction = TestBed.get(SphereFunction);
    expect(service.func(0, 0)).toBeCloseTo(0, 12);
  });
});
