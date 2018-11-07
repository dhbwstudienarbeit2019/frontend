import {TestBed} from '@angular/core/testing';
import {HimmelblauFunction} from './himmelblau-function';


describe('Himmelblau\'s function', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [HimmelblauFunction]
  }));

  it('should be created', () => {
    const service: HimmelblauFunction = TestBed.get(HimmelblauFunction);
    expect(service).toBeTruthy();
  });
  it('should be 0 at f(3,2)', () => {
    const service: HimmelblauFunction = TestBed.get(HimmelblauFunction);
    expect(service.func(3, 2)).toBeCloseTo(0, 11);
  });
  it('should be 0 at f(-2.805118,3.131313)', () => {
    const service: HimmelblauFunction = TestBed.get(HimmelblauFunction);
    expect(service.func(-2.805118, 3.131313)).toBeCloseTo(0, 10);
  });
  it('should be 0 at f(-3.779310,-3.283186)', () => {
    const service: HimmelblauFunction = TestBed.get(HimmelblauFunction);
    expect(service.func(-3.779310, -3.283186)).toBeCloseTo(0, 11);
  });
});
