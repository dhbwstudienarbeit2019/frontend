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
  it('should be defined at max-x, max-y', () => {
    const service: ThreeHumpCamelFunction = TestBed.get(ThreeHumpCamelFunction);
    const x = service.searchArea.max.x;
    const y = service.searchArea.max.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });
  it('should be defined at max-x, min-y', () => {
    const service: ThreeHumpCamelFunction = TestBed.get(ThreeHumpCamelFunction);
    const x = service.searchArea.max.x;
    const y = service.searchArea.min.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });
  it('should be defined at min-x, min-y', () => {
    const service: ThreeHumpCamelFunction = TestBed.get(ThreeHumpCamelFunction);
    const x = service.searchArea.min.x;
    const y = service.searchArea.min.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });
  it('should be defined at max-x, min-y', () => {
    const service: ThreeHumpCamelFunction = TestBed.get(ThreeHumpCamelFunction);
    const x = service.searchArea.min.x;
    const y = service.searchArea.max.y;
    expect(service.func(x, y)).toBeDefined();
    expect(service.func(x, y)).not.toBeNaN();
  });

  it('should be serializable', () => {
    const service: ThreeHumpCamelFunction = TestBed.get(ThreeHumpCamelFunction);
    const { x, y } = service.searchArea.max;
    const funcAsStr = service.func.toString();
    expect(service.func(x, y)).toBeCloseTo(new Function('return ' + funcAsStr)()(x, y), 10);
  });
});
