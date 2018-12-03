import {TestBed} from '@angular/core/testing';
import {EasomFunction} from './easom-function';


describe('Easom Function', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [EasomFunction]
  }));

  it('should be created', () => {
    const service: EasomFunction = TestBed.get(EasomFunction);
    expect(service).toBeTruthy();
  });
  it('should be 0 at f(3.1415...,3.1415...)', () => {
    const service: EasomFunction = TestBed.get(EasomFunction);
    expect(service.func(Math.PI, Math.PI)).toBeCloseTo(-1, 12);
  });
  it('should be defined at max-x, max-y', () => {
    const service: EasomFunction = TestBed.get(EasomFunction);
    const x = service.searchArea.max.x;
    const y = service.searchArea.max.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });
  it('should be defined at max-x, min-y', () => {
    const service: EasomFunction = TestBed.get(EasomFunction);
    const x = service.searchArea.max.x;
    const y = service.searchArea.min.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });
  it('should be defined at min-x, min-y', () => {
    const service: EasomFunction = TestBed.get(EasomFunction);
    const x = service.searchArea.min.x;
    const y = service.searchArea.min.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });
  it('should be defined at max-x, min-y', () => {
    const service: EasomFunction = TestBed.get(EasomFunction);
    const x = service.searchArea.min.x;
    const y = service.searchArea.max.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });

  it('should be serializable', () => {
    const service: EasomFunction = TestBed.get(EasomFunction);
    const { x, y } = service.searchArea.max;
    const funcAsStr = service.func.toString();
    expect(service.func(x, y)).toBeCloseTo(new Function('return ' + funcAsStr)()(x, y), 10);
  });
});
