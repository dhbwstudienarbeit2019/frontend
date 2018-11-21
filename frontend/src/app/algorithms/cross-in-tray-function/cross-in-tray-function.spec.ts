import {TestBed} from '@angular/core/testing';
import {CrossInTrayFunction} from './cross-in-tray-function';

const result = -2.062611870820258;
describe('CrossInTrayFunction', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [CrossInTrayFunction]
  }));

  it('should be created', () => {
    const service: CrossInTrayFunction = TestBed.get(CrossInTrayFunction);
    expect(service).toBeTruthy();
  });
  it('should be -2.06261 at f(1.34941,-1.34941)', () => {
    const service: CrossInTrayFunction = TestBed.get(CrossInTrayFunction);
    expect(service.func(1.34941, -1.34941)).toBeCloseTo(result, 12);
  });
  it('should be -2.06261 at f(1.34941,1.34941)', () => {
    const service: CrossInTrayFunction = TestBed.get(CrossInTrayFunction);
    expect(service.func(1.34941, 1.34941)).toBeCloseTo(result, 12);
  });
  it('should be -2.06261 at f(-1.34941,-1.34941)', () => {
    const service: CrossInTrayFunction = TestBed.get(CrossInTrayFunction);
    expect(service.func(-1.34941, -1.34941)).toBeCloseTo(result, 12);
  });
  it('should be -2.06261 at f(-1.34941,1.34941)', () => {
    const service: CrossInTrayFunction = TestBed.get(CrossInTrayFunction);
    expect(service.func(-1.34941, 1.34941)).toBeCloseTo(result, 12);
  });
});
