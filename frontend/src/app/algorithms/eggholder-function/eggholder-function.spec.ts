import {TestBed} from '@angular/core/testing';
import {EggholderFunction} from './eggholder-function';


describe('EggholderFunction', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [EggholderFunction]
  }));

  it('should be created', () => {
    const service: EggholderFunction = TestBed.get(EggholderFunction);
    expect(service).toBeTruthy();
  });
  it('should be -959.6407 at f(512, 404.2319)', () => {
    const service: EggholderFunction = TestBed.get(EggholderFunction);
    expect(service.func(512, 404.2319)).toBeCloseTo(-959.6406627, 7);
  });
  it('should be defined at max-x, max-y', () => {
    const service: EggholderFunction = TestBed.get(EggholderFunction);
    const x = service.searchArea.max.x;
    const y = service.searchArea.max.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });
  it('should be defined at max-x, min-y', () => {
    const service: EggholderFunction = TestBed.get(EggholderFunction);
    const x = service.searchArea.max.x;
    const y = service.searchArea.min.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });
  it('should be defined at min-x, min-y', () => {
    const service: EggholderFunction = TestBed.get(EggholderFunction);
    const x = service.searchArea.min.x;
    const y = service.searchArea.min.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });
  it('should be defined at max-x, min-y', () => {
    const service: EggholderFunction = TestBed.get(EggholderFunction);
    const x = service.searchArea.min.x;
    const y = service.searchArea.max.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });

  it('should be serializable', () => {
    const service: EggholderFunction = TestBed.get(EggholderFunction);
    const { x, y } = service.searchArea.max;
    const funcAsStr = service.func.toString();
    expect(service.func(x, y)).toBeCloseTo(new Function('return ' + funcAsStr)()(x, y), 10);
  });
});
