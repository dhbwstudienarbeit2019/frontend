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
  it('should be defined at max-x, max-y', () => {
    const service: CrossInTrayFunction = TestBed.get(CrossInTrayFunction);
    const x = service.searchArea.max.x;
    const y = service.searchArea.max.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });
  it('should be defined at max-x, min-y', () => {
    const service: CrossInTrayFunction = TestBed.get(CrossInTrayFunction);
    const x = service.searchArea.max.x;
    const y = service.searchArea.min.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });
  it('should be defined at min-x, min-y', () => {
    const service: CrossInTrayFunction = TestBed.get(CrossInTrayFunction);
    const x = service.searchArea.min.x;
    const y = service.searchArea.min.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });
  it('should be defined at max-x, min-y', () => {
    const service: CrossInTrayFunction = TestBed.get(CrossInTrayFunction);
    const x = service.searchArea.min.x;
    const y = service.searchArea.max.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });

  it('should be serializable', () => {
    const service: CrossInTrayFunction = TestBed.get(CrossInTrayFunction);
    const { x, y } = service.searchArea.max;
    const funcAsStr = service.func.toString();
    expect(service.func(x, y)).toBeCloseTo(new Function('return ' + funcAsStr)()(x, y), 10);
  });
});
