import { OptimizationAlgorithmInterface } from '../optimization-algorithm.interface';

export class AckleyFunction implements OptimizationAlgorithmInterface {

    public readonly description = `In mathematical optimization, the Ackley Function is a non-convex
    function used as a performance test problem for optimization algorithms.
    N-dimensional function that has a large number of local minima but only one global minimum`;
    public readonly name = 'Ackley';
    public readonly searchArea = {
        min: { x: -5, y: -5 },
        max: { x: 5, y: 5 }
    };
    public func = (x: number, y: number) => {
        const root = Math.sqrt(0.5 * (x * x + y * y));
        const exp1 = Math.exp(-0.2 * root);
        const exp2 = Math.exp(0.5 * (Math.cos(2 * Math.PI * x) + Math.cos(2 * Math.PI * y)));
        return -20 * exp1 + Math.E + 20 - exp2;
    }
}
