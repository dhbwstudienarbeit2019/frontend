import {TestBed} from '@angular/core/testing';
import {LeviFunction} from './levi-function';


describe('LeviFunction', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [LeviFunction]
  }));

  it('should be created', () => {
    const service: LeviFunction = TestBed.get(LeviFunction);
    expect(service).toBeTruthy();
  });
  it('should be 0 at f(1,1)', () => {
    const service: LeviFunction = TestBed.get(LeviFunction);
    expect(service.func(1, 1)).toBeCloseTo(0, 12);
  });
  it('should be defined at max-x, max-y', () => {
    const service: LeviFunction = TestBed.get(LeviFunction);
    const x = service.searchArea.max.x;
    const y = service.searchArea.max.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });
  it('should be defined at max-x, min-y', () => {
    const service: LeviFunction = TestBed.get(LeviFunction);
    const x = service.searchArea.max.x;
    const y = service.searchArea.min.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });
  it('should be defined at min-x, min-y', () => {
    const service: LeviFunction = TestBed.get(LeviFunction);
    const x = service.searchArea.min.x;
    const y = service.searchArea.min.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });
  it('should be defined at max-x, min-y', () => {
    const service: LeviFunction = TestBed.get(LeviFunction);
    const x = service.searchArea.min.x;
    const y = service.searchArea.max.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });

  it('should be serializable', () => {
    const service: LeviFunction = TestBed.get(LeviFunction);
    const { x, y } = service.searchArea.max;
    const funcAsStr = service.func.toString();
    expect(service.func(x, y)).toBeCloseTo(new Function('return ' + funcAsStr)()(x, y), 10);
  });
});
