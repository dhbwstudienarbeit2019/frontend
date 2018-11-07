import {TestBed} from '@angular/core/testing';
import {LeviFunction} from './levi-function';


describe('LeviFunction', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [LeviFunction]
  }));

  it('should be created', () => {
    const service: LeviFunction = TestBed.get(LeviFunction);
    expect(service).toBeTruthy();
  });
  it('should be 0 at f(1,1)', () => {
    const service: LeviFunction = TestBed.get(LeviFunction);
    expect(service.func(1, 1)).toBeCloseTo(0, 12);
  });
});
