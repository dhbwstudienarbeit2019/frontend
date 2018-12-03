import {TestBed} from '@angular/core/testing';
import {StyblinskiTangFunction} from './styblinski-tang-function';

const param = -2.903534;
const result = -39.16615 * 2;
describe('Styblinski–Tang function', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [StyblinskiTangFunction]
  }));

  it('should be created', () => {
    const service: StyblinskiTangFunction = TestBed.get(StyblinskiTangFunction);
    expect(service).toBeTruthy();
  });
  it(`should be ${result} at f(${param},${param})`, () => {
    const service: StyblinskiTangFunction = TestBed.get(StyblinskiTangFunction);
    expect(service.func(param, param)).toBeCloseTo(result, 4);
  });
  it('should be defined at max-x, max-y', () => {
    const service: StyblinskiTangFunction = TestBed.get(StyblinskiTangFunction);
    const x = service.searchArea.max.x;
    const y = service.searchArea.max.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });
  it('should be defined at max-x, min-y', () => {
    const service: StyblinskiTangFunction = TestBed.get(StyblinskiTangFunction);
    const x = service.searchArea.max.x;
    const y = service.searchArea.min.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });
  it('should be defined at min-x, min-y', () => {
    const service: StyblinskiTangFunction = TestBed.get(StyblinskiTangFunction);
    const x = service.searchArea.min.x;
    const y = service.searchArea.min.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });
  it('should be defined at max-x, min-y', () => {
    const service: StyblinskiTangFunction = TestBed.get(StyblinskiTangFunction);
    const x = service.searchArea.min.x;
    const y = service.searchArea.max.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });

  it('should be serializable', () => {
    const service: StyblinskiTangFunction = TestBed.get(StyblinskiTangFunction);
    const { x, y } = service.searchArea.max;
    const funcAsStr = service.func.toString();
    expect(service.func(x, y)).toBeCloseTo(new Function('return ' + funcAsStr)()(x, y), 10);
  });
});
