import {TestBed} from '@angular/core/testing';
import {SchafferN4Function} from './schaffer-n4-function';


describe('Schaffer function N. 4 ', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [SchafferN4Function]
  }));

  it('should be created', () => {
    const service: SchafferN4Function = TestBed.get(SchafferN4Function);
    expect(service).toBeTruthy();
  });
  it('should be 0.291271 at f(0,1.25313)', () => {
    const service: SchafferN4Function = TestBed.get(SchafferN4Function);
    expect(service.func(0, 1.25313)).toBeCloseTo(0.291271, 5);
  });
  it('should be defined at max-x, max-y', () => {
    const service: SchafferN4Function = TestBed.get(SchafferN4Function);
    const x = service.searchArea.max.x;
    const y = service.searchArea.max.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });
  it('should be defined at max-x, min-y', () => {
    const service: SchafferN4Function = TestBed.get(SchafferN4Function);
    const x = service.searchArea.max.x;
    const y = service.searchArea.min.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });
  it('should be defined at min-x, min-y', () => {
    const service: SchafferN4Function = TestBed.get(SchafferN4Function);
    const x = service.searchArea.min.x;
    const y = service.searchArea.min.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });
  it('should be defined at max-x, min-y', () => {
    const service: SchafferN4Function = TestBed.get(SchafferN4Function);
    const x = service.searchArea.min.x;
    const y = service.searchArea.max.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });

  it('should be serializable', () => {
    const service: SchafferN4Function = TestBed.get(SchafferN4Function);
    const { x, y } = service.searchArea.max;
    const funcAsStr = service.func.toString();
    expect(service.func(x, y)).toBeCloseTo(new Function('return ' + funcAsStr)()(x, y), 10);
  });
});
