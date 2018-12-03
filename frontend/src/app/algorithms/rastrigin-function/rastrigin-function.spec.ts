import {TestBed} from '@angular/core/testing';
import {RastriginFunction} from './rastrigin-function';


describe('RastriginFunction', () => {
  beforeEach(() => TestBed.configureTestingModule(
    {
      providers: [RastriginFunction]
    }));

  it('should be created', () => {
    const service: RastriginFunction = TestBed.get(RastriginFunction);
    expect(service).toBeTruthy();
  });
  it('should be 0 at f(0,0)', () => {
    const service: RastriginFunction = TestBed.get(RastriginFunction);
    expect(service.func(0, 0)).toBe(0);
  });
  it('should be defined at max-x, max-y', () => {
    const service: RastriginFunction = TestBed.get(RastriginFunction);
    const x = service.searchArea.max.x;
    const y = service.searchArea.max.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });
  it('should be defined at max-x, min-y', () => {
    const service: RastriginFunction = TestBed.get(RastriginFunction);
    const x = service.searchArea.max.x;
    const y = service.searchArea.min.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });
  it('should be defined at min-x, min-y', () => {
    const service: RastriginFunction = TestBed.get(RastriginFunction);
    const x = service.searchArea.min.x;
    const y = service.searchArea.min.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });
  it('should be defined at max-x, min-y', () => {
    const service: RastriginFunction = TestBed.get(RastriginFunction);
    const x = service.searchArea.min.x;
    const y = service.searchArea.max.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });

  it('should be serializable', () => {
    const service: RastriginFunction = TestBed.get(RastriginFunction);
    const { x, y } = service.searchArea.max;
    const funcAsStr = service.func.toString();
    expect(service.func(x, y)).toBeCloseTo(new Function('return ' + funcAsStr)()(x, y), 10);
  });
});
