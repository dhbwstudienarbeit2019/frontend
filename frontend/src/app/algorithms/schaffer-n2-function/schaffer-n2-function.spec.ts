import {TestBed} from '@angular/core/testing';
import {SchafferN2Function} from './schaffer-n2-function';


describe('Schaffer function N. 2 ', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [SchafferN2Function]
  }));

  it('should be created', () => {
    const service: SchafferN2Function = TestBed.get(SchafferN2Function);
    expect(service).toBeTruthy();
  });
  it('should be 0 at f(0,0)', () => {
    const service: SchafferN2Function = TestBed.get(SchafferN2Function);
    expect(service.func(0, 0)).toBeCloseTo(0, 12);
  });
});
