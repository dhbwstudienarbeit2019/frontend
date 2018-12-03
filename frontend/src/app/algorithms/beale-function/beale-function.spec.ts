import {TestBed} from '@angular/core/testing';
import {BealeFunction} from './beale-function';


describe('BealeFunction', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [BealeFunction]
  }));

  it('should be created', () => {
    const service: BealeFunction = TestBed.get(BealeFunction);
    expect(service).toBeTruthy();
  });
  it('should be 0 at f(3,0.5)', () => {
    const service: BealeFunction = TestBed.get(BealeFunction);
    expect(service.func(3, 0.5)).toBeCloseTo(0, 12);
  });
  it('should be defined at max-x, max-y', () => {
    const service: BealeFunction = TestBed.get(BealeFunction);
    const x = service.searchArea.max.x;
    const y = service.searchArea.max.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });
  it('should be defined at max-x, min-y', () => {
    const service: BealeFunction = TestBed.get(BealeFunction);
    const x = service.searchArea.max.x;
    const y = service.searchArea.min.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });
  it('should be defined at min-x, min-y', () => {
    const service: BealeFunction = TestBed.get(BealeFunction);
    const x = service.searchArea.min.x;
    const y = service.searchArea.min.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });
  it('should be defined at max-x, min-y', () => {
    const service: BealeFunction = TestBed.get(BealeFunction);
    const x = service.searchArea.min.x;
    const y = service.searchArea.max.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });

  it('should be serializable', () => {
    const service: BealeFunction = TestBed.get(BealeFunction);
    const { x, y } = service.searchArea.max;
    const funcAsStr = service.func.toString();
    expect(service.func(x, y)).toBeCloseTo(new Function('return ' + funcAsStr)()(x, y), 10);
  });
});
