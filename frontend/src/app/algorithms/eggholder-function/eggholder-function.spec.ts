import {TestBed} from '@angular/core/testing';
import {EggholderFunction} from './eggholder-function';


describe('EggholderFunction', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [EggholderFunction]
  }));

  it('should be created', () => {
    const service: EggholderFunction = TestBed.get(EggholderFunction);
    expect(service).toBeTruthy();
  });
  it('should be -959.6407 at f(512, 404.2319)', () => {
    const service: EggholderFunction = TestBed.get(EggholderFunction);
    expect(service.func(512, 404.2319)).toBeCloseTo(-959.6406627, 7);
  });
});
