import {TestBed} from '@angular/core/testing';
import {BealeFunction} from './beale-function';


describe('BealeFunction', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [BealeFunction]
  }));

  it('should be created', () => {
    const service: BealeFunction = TestBed.get(BealeFunction);
    expect(service).toBeTruthy();
  });
  it('should be 0 at f(3,0.5)', () => {
    const service: BealeFunction = TestBed.get(BealeFunction);
    expect(service.func(3, 0.5)).toBeCloseTo(0, 12);
  });
});
