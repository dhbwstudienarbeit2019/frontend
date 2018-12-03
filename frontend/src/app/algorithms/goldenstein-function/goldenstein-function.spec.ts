import { TestBed } from '@angular/core/testing';
import { GoldensteinFunction } from './goldenstein-function';


describe('GoldensteinFunction', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [GoldensteinFunction]
  }));

  it('should be created', () => {
    const service: GoldensteinFunction = TestBed.get(GoldensteinFunction);
    expect(service).toBeTruthy();
  });
  it('should be 3 at f(0,-1)', () => {
    const service: GoldensteinFunction = TestBed.get(GoldensteinFunction);
    expect(service.func(0, -1)).toBeCloseTo(3, 12);
  });
  it('should be defined at max-x, max-y', () => {
    const service: GoldensteinFunction = TestBed.get(GoldensteinFunction);
    const x = service.searchArea.max.x;
    const y = service.searchArea.max.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });
  it('should be defined at max-x, min-y', () => {
    const service: GoldensteinFunction = TestBed.get(GoldensteinFunction);
    const x = service.searchArea.max.x;
    const y = service.searchArea.min.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });
  it('should be defined at min-x, min-y', () => {
    const service: GoldensteinFunction = TestBed.get(GoldensteinFunction);
    const x = service.searchArea.min.x;
    const y = service.searchArea.min.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });
  it('should be defined at max-x, min-y', () => {
    const service: GoldensteinFunction = TestBed.get(GoldensteinFunction);
    const x = service.searchArea.min.x;
    const y = service.searchArea.max.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });

  it('should be serializable', () => {
    const service: GoldensteinFunction = TestBed.get(GoldensteinFunction);
    const { x, y } = service.searchArea.max;
    const funcAsStr = service.func.toString();
    expect(service.func(x, y)).toBeCloseTo(new Function('return ' + funcAsStr)()(x, y), 10);
  });
});
