import {TestBed} from '@angular/core/testing';
import {HoelderTableFunction} from './hoelder-table-function';

const min_x = 8.05502, min_y = 9.66459;
const result = -19.208502567767;
describe('HoelderTableFunction', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [HoelderTableFunction]
  }));

  it('should be created', () => {
    const service: HoelderTableFunction = TestBed.get(HoelderTableFunction);
    expect(service).toBeTruthy();
  });
  it(`should be ${result}at f(${min_x},${min_y})`, () => {
    const service: HoelderTableFunction = TestBed.get(HoelderTableFunction);
    expect(service.func(min_x, min_y)).toBeCloseTo(result, 9);
  });
  it(`should be ${result}at f(${-min_x},${min_y})`, () => {
    const service: HoelderTableFunction = TestBed.get(HoelderTableFunction);
    expect(service.func(-min_x, min_y)).toBeCloseTo(result, 9);
  });
  it(`should be ${result}at f(${min_x},${-min_y})`, () => {
    const service: HoelderTableFunction = TestBed.get(HoelderTableFunction);
    expect(service.func(min_x, -min_y)).toBeCloseTo(result, 9);
  });
  it(`should be ${result}at f(${-min_x},${-min_y})`, () => {
    const service: HoelderTableFunction = TestBed.get(HoelderTableFunction);
    expect(service.func(-min_x, -min_y)).toBeCloseTo(result, 9);
  });
  it('should be defined at max-x, max-y', () => {
    const service: HoelderTableFunction = TestBed.get(HoelderTableFunction);
    const x = service.searchArea.max.x;
    const y = service.searchArea.max.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });
  it('should be defined at max-x, min-y', () => {
    const service: HoelderTableFunction = TestBed.get(HoelderTableFunction);
    const x = service.searchArea.max.x;
    const y = service.searchArea.min.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });
  it('should be defined at min-x, min-y', () => {
    const service: HoelderTableFunction = TestBed.get(HoelderTableFunction);
    const x = service.searchArea.min.x;
    const y = service.searchArea.min.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });
  it('should be defined at max-x, min-y', () => {
    const service: HoelderTableFunction = TestBed.get(HoelderTableFunction);
    const x = service.searchArea.min.x;
    const y = service.searchArea.max.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });

  it('should be serializable', () => {
    const service: HoelderTableFunction = TestBed.get(HoelderTableFunction);
    const { x, y } = service.searchArea.max;
    const funcAsStr = service.func.toString();
    expect(service.func(x, y)).toBeCloseTo(new Function('return ' + funcAsStr)()(x, y), 10);
  });
});
