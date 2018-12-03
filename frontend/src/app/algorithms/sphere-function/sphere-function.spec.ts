import {TestBed} from '@angular/core/testing';
import {SphereFunction} from './sphere-function';


describe('SphereFunction', () => {
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
  it('should be defined at max-x, max-y', () => {
    const service: SphereFunction = TestBed.get(SphereFunction);
    const x = service.searchArea.max.x;
    const y = service.searchArea.max.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });
  it('should be defined at max-x, min-y', () => {
    const service: SphereFunction = TestBed.get(SphereFunction);
    const x = service.searchArea.max.x;
    const y = service.searchArea.min.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });
  it('should be defined at min-x, min-y', () => {
    const service: SphereFunction = TestBed.get(SphereFunction);
    const x = service.searchArea.min.x;
    const y = service.searchArea.min.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });
  it('should be defined at max-x, min-y', () => {
    const service: SphereFunction = TestBed.get(SphereFunction);
    const x = service.searchArea.min.x;
    const y = service.searchArea.max.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });

  it('should be serializable', () => {
    const service: SphereFunction = TestBed.get(SphereFunction);
    const { x, y } = service.searchArea.max;
    const funcAsStr = service.func.toString();
    expect(service.func(x, y)).toBeCloseTo(new Function('return ' + funcAsStr)()(x, y), 10);
  });
});
