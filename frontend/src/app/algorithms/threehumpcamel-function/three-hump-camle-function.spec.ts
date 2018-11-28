import {TestBed} from '@angular/core/testing';
import {ThreeHumpCamelFunction} from './three-hump-camel-function';


describe('ThreeHumpCamelFunction', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ThreeHumpCamelFunction]
  }));

  it('should be created', () => {
    const service: ThreeHumpCamelFunction = TestBed.get(ThreeHumpCamelFunction);
    expect(service).toBeTruthy();
  });
  it('should be 0 at f(0,0)', () => {
    const service: ThreeHumpCamelFunction = TestBed.get(ThreeHumpCamelFunction);
    expect(service.func(0, 0)).toBeCloseTo(0, 12);
  });
});
