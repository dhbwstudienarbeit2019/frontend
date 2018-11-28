import {OptimizationAlgorithmInterface} from '../optimization-algorithm.interface';

export class AckleyFunction implements OptimizationAlgorithmInterface {

    public readonly description = '';
    public readonly name = 'Ackley';
    public func = (x: number, y: number) => {
        const root = Math.sqrt(0.5 * (x * x + y * y));
        const exp1 = Math.exp(-0.2 * root);
        const exp2 = Math.exp(0.5 * (Math.cos(2 * Math.PI * x) + Math.cos(2 * Math.PI * y)));
        return -20 * exp1 + Math.E + 20 - exp2;
    };
    public readonly searchArea = {
        min: {x: -5, y: -5},
        max: {x: 5, y: 5}
    };

}
