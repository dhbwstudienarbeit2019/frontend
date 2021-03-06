import { TestBed } from '@angular/core/testing';
import { HimmelblauFunction } from './himmelblau-function';


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
  it('should be 0.0 at f(3.5844, -1.848126)', () => {
    const service: HimmelblauFunction = TestBed.get(HimmelblauFunction);
    expect(service.func(3.584428, -1.848126)).toBeCloseTo(0, 10);
  });
  it('should be 0 at f(-2.805118,3.131313)', () => {
    const service: HimmelblauFunction = TestBed.get(HimmelblauFunction);
    expect(service.func(-2.805118, 3.131313)).toBeCloseTo(0, 10);
  });
  it('should be 0 at f(-3.779310,-3.283186)', () => {
    const service: HimmelblauFunction = TestBed.get(HimmelblauFunction);
    expect(service.func(-3.779310, -3.283186)).toBeCloseTo(0, 11);
  });
  it('should be defined at max-x, max-y', () => {
    const service: HimmelblauFunction = TestBed.get(HimmelblauFunction);
    const x = service.searchArea.max.x;
    const y = service.searchArea.max.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });
  it('should be defined at max-x, min-y', () => {
    const service: HimmelblauFunction = TestBed.get(HimmelblauFunction);
    const x = service.searchArea.max.x;
    const y = service.searchArea.min.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });
  it('should be defined at min-x, min-y', () => {
    const service: HimmelblauFunction = TestBed.get(HimmelblauFunction);
    const x = service.searchArea.min.x;
    const y = service.searchArea.min.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });
  it('should be defined at max-x, min-y', () => {
    const service: HimmelblauFunction = TestBed.get(HimmelblauFunction);
    const x = service.searchArea.min.x;
    const y = service.searchArea.max.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });
  it('should be serializable', () => {
    const service: HimmelblauFunction = TestBed.get(HimmelblauFunction);
    const { x, y } = service.searchArea.max;
    const funcAsStr = service.func.toString();
    expect(service.func(x, y)).toBeCloseTo(new Function('return ' + funcAsStr)()(x, y), 10);
  });
});
