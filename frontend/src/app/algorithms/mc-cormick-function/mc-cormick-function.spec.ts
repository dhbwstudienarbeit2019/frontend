import {TestBed} from '@angular/core/testing';
import {McCormickFunction} from './mc-cormick-function';


describe('McCormickFunction', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [McCormickFunction]
  }));

  it('should be created', () => {
    const service: McCormickFunction = TestBed.get(McCormickFunction);
    expect(service).toBeTruthy();
  });
  it('should be -1.9133 at f(-0.54719,-1.54719)', () => {
    const service: McCormickFunction = TestBed.get(McCormickFunction);
    expect(service.func(-0.54719, -1.54719)).toBeCloseTo(-1.9133, 3);
  });
});
