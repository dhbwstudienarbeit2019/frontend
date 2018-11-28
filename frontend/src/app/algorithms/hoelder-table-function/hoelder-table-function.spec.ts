import {TestBed} from '@angular/core/testing';
import {HoelderTableFunction} from './hoelder-table-function';

const x = 8.05502, y = 9.66459;
const result = -19.208502567767;
describe('HoelderTableFunction', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [HoelderTableFunction]
  }));

  it('should be created', () => {
    const service: HoelderTableFunction = TestBed.get(HoelderTableFunction);
    expect(service).toBeTruthy();
  });
  it(`should be ${result}at f(${x},${y})`, () => {
    const service: HoelderTableFunction = TestBed.get(HoelderTableFunction);
    expect(service.func(x, y)).toBeCloseTo(result, 9);
  });
  it(`should be ${result}at f(${-x},${y})`, () => {
    const service: HoelderTableFunction = TestBed.get(HoelderTableFunction);
    expect(service.func(-x, y)).toBeCloseTo(result, 9);
  });
  it(`should be ${result}at f(${x},${-y})`, () => {
    const service: HoelderTableFunction = TestBed.get(HoelderTableFunction);
    expect(service.func(x, -y)).toBeCloseTo(result, 9);
  });
  it(`should be ${result}at f(${-x},${-y})`, () => {
    const service: HoelderTableFunction = TestBed.get(HoelderTableFunction);
    expect(service.func(-x, -y)).toBeCloseTo(result, 9);
  });
});
