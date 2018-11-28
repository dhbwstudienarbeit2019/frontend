import {TestBed} from '@angular/core/testing';
import {RosenbrockFunction} from './rosenbrock-function';


describe('Rosenbrock Function', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [RosenbrockFunction]
  }));

  it('should be created', () => {
    const service: RosenbrockFunction = TestBed.get(RosenbrockFunction);
    expect(service).toBeTruthy();
  });
  it('should be 0 at f(1,1)', () => {
    const service: RosenbrockFunction = TestBed.get(RosenbrockFunction);
    expect(service.func(1, 1)).toBe(0);
  });
  it('should be greater 0 at f(0,0)', () => {
    const service: RosenbrockFunction = TestBed.get(RosenbrockFunction);
    expect(service.func(0, 0)).toBeGreaterThan(0);
  });
});
