import { OptimizationAlgorithmInterface } from '../optimization-algorithm.interface';

export class BoothFunction implements OptimizationAlgorithmInterface {
    public readonly description =
        `In mathematical optimization, the Booth Function is a convex function used as
         a performance test problem for optimization algorithms.`;
    public readonly name = 'Booth';
    public readonly searchArea = {
        min: { x: -10, y: -10 },
        max: { x: 10, y: 10 }
    };
    public readonly func = (x: number, y: number) => {
        const pt1 = (x + 2 * y - 7);
        const pt2 = (2 * x + y - 5);
        return pt1 * pt1 + pt2 * pt2;
    }

}
