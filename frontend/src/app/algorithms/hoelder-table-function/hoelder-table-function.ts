import {OptimizationAlgorithmInterface} from '../optimization-algorithm.interface';

export class HoelderTableFunction implements OptimizationAlgorithmInterface {
    public readonly description = '';
    public readonly name = 'Hölder table';
    public readonly func = (x: number, y: number) => {
        const sines = Math.sin(x) * Math.cos(y);
        const sqrt = Math.sqrt(x * x + y * y);
        const exp = Math.exp(Math.abs(1 - sqrt / Math.PI));
        return -Math.abs(sines * exp);
    };
    public readonly searchArea = {min: {x: -10, y: -10}, max: {x: 10, y: 10}};
}
