import {OptimizationAlgorithmInterface} from '../optimization-algorithm.interface';

export class SchafferN4Function implements OptimizationAlgorithmInterface {
    public readonly description = '';
    public readonly name = 'Schaffer N. 4';
    public readonly searchArea = {
        min: {x: -100, y: -100},
        max: {x: 100, y: 100}
    };
    public readonly func = (x: number, y: number) => {
        const xxyyDif = x * x - y * y;
        const xxyySum = x * x + y * y;
        const sine = Math.sin(Math.abs(xxyyDif));
        const cosine = Math.cos(sine) * Math.cos(sine);
        const dividend = (1 + 0.001 * xxyySum);
        return 0.5 + (cosine - 0.5) / (dividend * dividend);
    }
}
