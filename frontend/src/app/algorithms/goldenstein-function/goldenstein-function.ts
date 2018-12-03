import {OptimizationAlgorithmInterface} from '../optimization-algorithm.interface';

export class GoldensteinFunction implements OptimizationAlgorithmInterface {
    readonly description = '';
    readonly name = 'Goldenstein';
    public readonly searchArea = {min: {x: -2, y: -2}, max: {x: 2, y: 2}};
    readonly func = (x: number, y: number) => {
        const pt1 = x + y + 1;
        const pt2 = 19 - 14 * x + 3 * x * x - 14 * y + 6 * x * y + 3 * y * y;
        const pt3 = 2 * x - 3 * y;
        const pt4 = 18 - 32 * x + 12 * x * x + 48 * y - 36 * x * y + 27 * y * y;
        return (1 + pt1 * pt1 * pt2) * (30 + pt3 * pt3 * pt4);
    }
}
