import {OptimizationAlgorithmInterface} from '../optimization-algorithm.interface';

export class HimmelblauFunction implements OptimizationAlgorithmInterface {
    public readonly description = '';
    public readonly name = 'Himmelblau\'s function';
    public readonly func = (x: number, y: number) => {
        const pt1 = (x * x + y - 11);
        const pt2 = (x + y * y - 7);
        return pt1 * pt1 + pt2 * pt2;
    };
    public readonly searchArea = {min: {x: -5, y: -5}, max: {x: 5, y: 5}};
}
