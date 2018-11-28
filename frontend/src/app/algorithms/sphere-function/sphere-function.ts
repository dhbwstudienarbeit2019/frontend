import {OptimizationAlgorithmInterface} from '../optimization-algorithm.interface';

export class SphereFunction implements OptimizationAlgorithmInterface {
    public readonly description = '';
    public readonly name = 'Sphere';
    public readonly func = (x: number, y: number) => x * x + y * y;
    public readonly searchArea = {
        min: {x: Number.NEGATIVE_INFINITY, y: Number.NEGATIVE_INFINITY},
        max: {x: Number.POSITIVE_INFINITY, y: Number.POSITIVE_INFINITY}
    };
}
