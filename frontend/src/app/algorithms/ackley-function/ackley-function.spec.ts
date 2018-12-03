import { TestBed } from '@angular/core/testing';
import { AckleyFunction } from './ackley-function';


describe('AckleyFunction', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [AckleyFunction]
  }));

  it('should be created', () => {
    const service: AckleyFunction = TestBed.get(AckleyFunction);
    expect(service).toBeTruthy();
  });
  it('should be 0 at f(0,0)', () => {
    const service: AckleyFunction = TestBed.get(AckleyFunction);
    expect(service.func(0, 0)).toBeCloseTo(0, 12);
  });
  it('should be defined at max-x, max-y', () => {
    const service: AckleyFunction = TestBed.get(AckleyFunction);
    const x = service.searchArea.max.x;
    const y = service.searchArea.max.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });
  it('should be defined at max-x, min-y', () => {
    const service: AckleyFunction = TestBed.get(AckleyFunction);
    const x = service.searchArea.max.x;
    const y = service.searchArea.min.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });
  it('should be defined at min-x, min-y', () => {
    const service: AckleyFunction = TestBed.get(AckleyFunction);
    const x = service.searchArea.min.x;
    const y = service.searchArea.min.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });
  it('should be defined at max-x, min-y', () => {
    const service: AckleyFunction = TestBed.get(AckleyFunction);
    const x = service.searchArea.min.x;
    const y = service.searchArea.max.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });

  it('should be serializable', () => {
    const service: AckleyFunction = TestBed.get(AckleyFunction);
    const { x, y } = service.searchArea.max;
    const funcAsStr = service.func.toString();
    expect(service.func(x, y)).toBeCloseTo(new Function('return ' + funcAsStr)()(x, y), 10);
  });
});
