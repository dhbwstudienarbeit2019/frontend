import {TestBed} from '@angular/core/testing';
import {MatyasFunction} from './matyas-function';


describe('MatyasFunction', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [MatyasFunction]
  }));

  it('should be created', () => {
    const service: MatyasFunction = TestBed.get(MatyasFunction);
    expect(service).toBeTruthy();
  });
  it('should be 0 at f(0,0)', () => {
    const service: MatyasFunction = TestBed.get(MatyasFunction);
    expect(service.func(0, 0)).toBeCloseTo(0, 12);
  });
});
