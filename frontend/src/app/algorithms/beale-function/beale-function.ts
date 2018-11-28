import {OptimizationAlgorithmInterface} from '../optimization-algorithm.interface';

export class BealeFunction implements OptimizationAlgorithmInterface {
    public readonly description = '';
    public readonly name = 'Beale';
    public readonly func = (x: number, y: number) => {
        return [
            (1.5 - x + x * y),
            (2.25 - x + x * y * y),
            (2.625 - x + x * y * y * y)
        ].map(result => result * result).reduce((a, b) => a + b);
    };
    public readonly searchArea = {
        min: {x: -4.5, y: -4.5},
        max: {x: 4.5, y: 4.5}
    };

}
