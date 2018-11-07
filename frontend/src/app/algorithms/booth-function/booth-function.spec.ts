import {TestBed} from '@angular/core/testing';
import {BoothFunction} from './booth-function';


describe('BoothFunction', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [BoothFunction]
  }));

  it('should be created', () => {
    const service: BoothFunction = TestBed.get(BoothFunction);
    expect(service).toBeTruthy();
  });
  it('should be 0 at f(1,3)', () => {
    const service: BoothFunction = TestBed.get(BoothFunction);
    expect(service.func(1, 3)).toBeCloseTo(0, 12);
  });
});
