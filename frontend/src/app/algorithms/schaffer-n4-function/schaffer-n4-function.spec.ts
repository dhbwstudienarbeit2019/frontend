import {TestBed} from '@angular/core/testing';
import {SchafferN4Function} from './schaffer-n4-function';


describe('Schaffer function N. 4 ', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [SchafferN4Function]
  }));

  it('should be created', () => {
    const service: SchafferN4Function = TestBed.get(SchafferN4Function);
    expect(service).toBeTruthy();
  });
  it('should be 0.291271 at f(0,1.25313)', () => {
    const service: SchafferN4Function = TestBed.get(SchafferN4Function);
    expect(service.func(0, 1.25313)).toBeCloseTo(0.291271, 5);
  });
});
