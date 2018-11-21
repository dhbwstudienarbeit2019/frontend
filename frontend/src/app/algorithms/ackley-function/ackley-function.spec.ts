import {TestBed} from '@angular/core/testing';
import {AckleyFunction} from './ackley-function';


describe('AckleyFunction', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [AckleyFunction]
  }));

  it('should be created', () => {
    const service: AckleyFunction = TestBed.get(AckleyFunction);
    expect(service).toBeTruthy();
  });
  it('should be 0 at f(0,0)', () => {
    const service: AckleyFunction = TestBed.get(AckleyFunction);
    expect(service.func(0, 0)).toBeCloseTo(0, 12);
  });
});
