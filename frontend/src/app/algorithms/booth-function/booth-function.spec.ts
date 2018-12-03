import {TestBed} from '@angular/core/testing';
import {BoothFunction} from './booth-function';


describe('BoothFunction', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [BoothFunction]
  }));

  it('should be created', () => {
    const service: BoothFunction = TestBed.get(BoothFunction);
    expect(service).toBeTruthy();
  });
  it('should be 0 at f(1,3)', () => {
    const service: BoothFunction = TestBed.get(BoothFunction);
    expect(service.func(1, 3)).toBeCloseTo(0, 12);
  });
  it('should be defined at max-x, max-y', () => {
    const service: BoothFunction = TestBed.get(BoothFunction);
    const x = service.searchArea.max.x;
    const y = service.searchArea.max.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });
  it('should be defined at max-x, min-y', () => {
    const service: BoothFunction = TestBed.get(BoothFunction);
    const x = service.searchArea.max.x;
    const y = service.searchArea.min.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });
  it('should be defined at min-x, min-y', () => {
    const service: BoothFunction = TestBed.get(BoothFunction);
    const x = service.searchArea.min.x;
    const y = service.searchArea.min.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });
  it('should be defined at max-x, min-y', () => {
    const service: BoothFunction = TestBed.get(BoothFunction);
    const x = service.searchArea.min.x;
    const y = service.searchArea.max.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });

  it('should be serializable', () => {
    const service: BoothFunction = TestBed.get(BoothFunction);
    const { x, y } = service.searchArea.max;
    const funcAsStr = service.func.toString();
    expect(service.func(x, y)).toBeCloseTo(new Function('return ' + funcAsStr)()(x, y), 10);
  });
});
