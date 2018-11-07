import {TestBed} from '@angular/core/testing';
import {GoldensteinFunction} from './goldenstein-function';


describe('GoldensteinFunction', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [GoldensteinFunction]
  }));

  it('should be created', () => {
    const service: GoldensteinFunction = TestBed.get(GoldensteinFunction);
    expect(service).toBeTruthy();
  });
  it('should be 3 at f(0,-1)', () => {
    const service: GoldensteinFunction = TestBed.get(GoldensteinFunction);
    expect(service.func(0,-1)).toBeCloseTo(3, 12);
  });
});
