import {OptimizationAlgorithmInterface} from '../optimization-algorithm.interface';

export class McCormickFunction implements OptimizationAlgorithmInterface {
    public readonly description = '';
    public readonly name = 'McCormick Function';
    public readonly func = (x: number, y: number) => {
        const xy = x - y;
        return Math.sin(x + y) + xy * xy - 1.5 * x + 2.5 * y + 1;
    };
    public readonly searchArea = {
        min: {x: -1.5, y: -3},
        max: {x: 4, y: 4}
    };
}
