import {TestBed} from '@angular/core/testing';
import {McCormickFunction} from './mc-cormick-function';


describe('McCormickFunction', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [McCormickFunction]
  }));

  it('should be created', () => {
    const service: McCormickFunction = TestBed.get(McCormickFunction);
    expect(service).toBeTruthy();
  });
  it('should be -1.9133 at f(-0.54719,-1.54719)', () => {
    const service: McCormickFunction = TestBed.get(McCormickFunction);
    expect(service.func(-0.54719, -1.54719)).toBeCloseTo(-1.9133, 3);
  });
  it('should be defined at max-x, max-y', () => {
    const service: McCormickFunction = TestBed.get(McCormickFunction);
    const x = service.searchArea.max.x;
    const y = service.searchArea.max.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });
  it('should be defined at max-x, min-y', () => {
    const service: McCormickFunction = TestBed.get(McCormickFunction);
    const x = service.searchArea.max.x;
    const y = service.searchArea.min.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });
  it('should be defined at min-x, min-y', () => {
    const service: McCormickFunction = TestBed.get(McCormickFunction);
    const x = service.searchArea.min.x;
    const y = service.searchArea.min.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });
  it('should be defined at max-x, min-y', () => {
    const service: McCormickFunction = TestBed.get(McCormickFunction);
    const x = service.searchArea.min.x;
    const y = service.searchArea.max.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });

  it('should be serializable', () => {
    const service: McCormickFunction = TestBed.get(McCormickFunction);
    const { x, y } = service.searchArea.max;
    const funcAsStr = service.func.toString();
    expect(service.func(x, y)).toBeCloseTo(new Function('return ' + funcAsStr)()(x, y), 10);
  });
  it('should be serializable6', () => {
    const service: McCormickFunction = TestBed.get(McCormickFunction);
    const { x, y } = service.searchArea.max;
    const funcAsStr = service.func.toString();
    expect('').toBe(funcAsStr);
  });
});
