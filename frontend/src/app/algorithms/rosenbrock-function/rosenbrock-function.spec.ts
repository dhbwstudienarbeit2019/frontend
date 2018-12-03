import {TestBed} from '@angular/core/testing';
import {RosenbrockFunction} from './rosenbrock-function';


describe('Rosenbrock Function', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [RosenbrockFunction]
  }));

  it('should be created', () => {
    const service: RosenbrockFunction = TestBed.get(RosenbrockFunction);
    expect(service).toBeTruthy();
  });
  it('should be 0 at f(1,1)', () => {
    const service: RosenbrockFunction = TestBed.get(RosenbrockFunction);
    expect(service.func(1, 1)).toBe(0);
  });
  it('should be greater 0 at f(0,0)', () => {
    const service: RosenbrockFunction = TestBed.get(RosenbrockFunction);
    expect(service.func(0, 0)).toBeGreaterThan(0);
  });
  it('should be defined at max-x, max-y', () => {
    const service: RosenbrockFunction = TestBed.get(RosenbrockFunction);
    const x = service.searchArea.max.x;
    const y = service.searchArea.max.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });
  it('should be defined at max-x, min-y', () => {
    const service: RosenbrockFunction = TestBed.get(RosenbrockFunction);
    const x = service.searchArea.max.x;
    const y = service.searchArea.min.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });
  it('should be defined at min-x, min-y', () => {
    const service: RosenbrockFunction = TestBed.get(RosenbrockFunction);
    const x = service.searchArea.min.x;
    const y = service.searchArea.min.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });
  it('should be defined at max-x, min-y', () => {
    const service: RosenbrockFunction = TestBed.get(RosenbrockFunction);
    const x = service.searchArea.min.x;
    const y = service.searchArea.max.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });

  it('should be serializable', () => {
    const service: RosenbrockFunction = TestBed.get(RosenbrockFunction);
    const { x, y } = service.searchArea.max;
    const funcAsStr = service.func.toString();
    expect(service.func(x, y)).toBeCloseTo(new Function('return ' + funcAsStr)()(x, y), 10);
  });

});
