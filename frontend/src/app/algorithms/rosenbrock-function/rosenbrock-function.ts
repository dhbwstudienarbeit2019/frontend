import {OptimizationAlgorithmInterface} from '../optimization-algorithm.interface';

export class RosenbrockFunction implements OptimizationAlgorithmInterface {
    public readonly description = '';
    public readonly name = 'Rosenbrock';
    public readonly func = (x: number, y: number) => {
        const yxx = (y - x * x);
        const ydif = 1 - x;
        return 100 * yxx * yxx + ydif * ydif;
    }

}
