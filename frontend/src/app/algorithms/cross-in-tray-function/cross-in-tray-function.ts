import {OptimizationAlgorithmInterface} from '../optimization-algorithm.interface';

export class CrossInTrayFunction implements OptimizationAlgorithmInterface {
    public readonly description = '';
    public readonly name = 'Cross-in-tray function';
    public readonly func = (x: number, y: number) => {
        const sqrt = Math.sqrt(x * x + y * y);
        const sines = Math.sin(x) * Math.sin(y);
        const exp = Math.exp(Math.abs(100 - sqrt / Math.PI));
        return -0.0001 * Math.pow(Math.abs(sines * exp) + 1, 0.1);
    };
    public readonly searchArea =
        {
            min: {x: -10, y: -10},
            max: {x: 10, y: 10}
        };
}
