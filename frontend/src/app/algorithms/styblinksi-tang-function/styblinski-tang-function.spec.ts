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
});
