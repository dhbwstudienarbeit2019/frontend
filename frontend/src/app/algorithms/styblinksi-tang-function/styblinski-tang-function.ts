import {OptimizationAlgorithmInterface} from '../optimization-algorithm.interface';

export class StyblinskiTangFunction implements OptimizationAlgorithmInterface {
    public readonly description = '';
    public readonly name = 'Styblinski–Tang';
    public readonly func = (x: number, y: number) => {
        const x2 = x * x;
        const y2 = y * y;
        const x4 = x2 * x2;
        const y4 = y2 * y2;
        return ((x4 - 16 * x2 + 5 * x) + (y4 - 16 * y2 + 5 * y)) / 2;
    };
    public readonly searchArea = {
        min: {x: -5, y: -5},
        max: {x: 5, y: 5}
    };
}
