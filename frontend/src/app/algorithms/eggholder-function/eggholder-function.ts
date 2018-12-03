import {OptimizationAlgorithmInterface} from '../optimization-algorithm.interface';

export class EggholderFunction implements OptimizationAlgorithmInterface {
    public readonly description = '';
    public readonly name = 'Eggholder';
    public readonly searchArea = {
        min: {x: -512, y: -512},
        max: {x: 512, y: 512}
    };
    public readonly func = (x: number, y: number) => {
        const sqrt1 = Math.sqrt(Math.abs(0.5 * x + y + 47));
        const sqrt2 = Math.sqrt(Math.abs(x - (y + 47)));
        return -(y + 47) * Math.sin(sqrt1) - x * Math.sin(sqrt2);
    }
}
