import {TestBed} from '@angular/core/testing';
import {RastriginFunction} from "./rastrigin-function";


describe('RastriginFunction', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: RastriginFunction = TestBed.get(RastriginFunction);
        expect(service).toBeTruthy();
    });
    it('should be 0 at f(0,0)', () => {
        const service: RastriginFunction = TestBed.get(RastriginFunction);
        expect(service.func(0, 0)).toBe(0);
    })
});
