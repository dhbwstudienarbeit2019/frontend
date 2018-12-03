import { OptimizationAlgorithmInterface } from '../optimization-algorithm.interface';

export class EasomFunction implements OptimizationAlgorithmInterface {
    public readonly description = '';
    public readonly name = 'Easom';
    public readonly searchArea = {
        min: { x: -100, y: -100 },
        max: { x: 100, y: 100 }
    };
    public readonly func = (x: number, y: number) => {
        const pt1 = x - Math.PI;
        const pt2 = y - Math.PI;
        return -Math.cos(x) * Math.cos(y) * Math.exp(-(pt1 * pt1 + pt2 * pt2));
    }

}
