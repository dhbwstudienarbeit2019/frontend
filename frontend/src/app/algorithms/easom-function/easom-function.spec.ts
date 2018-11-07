import {TestBed} from '@angular/core/testing';
import {EasomFunction} from './easom-function';


describe('Easom Function', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [EasomFunction]
  }));

  it('should be created', () => {
    const service: EasomFunction = TestBed.get(EasomFunction);
    expect(service).toBeTruthy();
  });
  it('should be 0 at f(3.1415...,3.1415...)', () => {
    const service: EasomFunction = TestBed.get(EasomFunction);
    expect(service.func(Math.PI, Math.PI)).toBeCloseTo(-1, 12);
  });
});
