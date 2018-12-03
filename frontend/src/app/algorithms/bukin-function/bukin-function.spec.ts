import { TestBed } from '@angular/core/testing';
import { BukinFunction } from './bukin-function';


describe('Bukin Function', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [BukinFunction]
  }));

  it('should be created', () => {
    const service: BukinFunction = TestBed.get(BukinFunction);
    expect(service).toBeTruthy();
  });
  it('should be 0 at f(-10,1)', () => {
    const service: BukinFunction = TestBed.get(BukinFunction);
    expect(service.func(-10, 1)).toBeCloseTo(0, 12);
  });
  it('should be defined at max-x, max-y', () => {
    const service: BukinFunction = TestBed.get(BukinFunction);
    const x = service.searchArea.max.x;
    const y = service.searchArea.max.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });
  it('should be defined at max-x, min-y', () => {
    const service: BukinFunction = TestBed.get(BukinFunction);
    const x = service.searchArea.max.x;
    const y = service.searchArea.min.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });
  it('should be defined at min-x, min-y', () => {
    const service: BukinFunction = TestBed.get(BukinFunction);
    const x = service.searchArea.min.x;
    const y = service.searchArea.min.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });
  it('should be defined at max-x, min-y', () => {
    const service: BukinFunction = TestBed.get(BukinFunction);
    const x = service.searchArea.min.x;
    const y = service.searchArea.max.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });

  it('should be serializable', () => {
    const service: BukinFunction = TestBed.get(BukinFunction);
    const { x, y } = service.searchArea.max;
    const funcAsStr = service.func.toString();
    expect(service.func(x, y)).toBeCloseTo(new Function('return ' + funcAsStr)()(x, y), 10);
  });
});
