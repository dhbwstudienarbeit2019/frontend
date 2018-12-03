import {OptimizationAlgorithmInterface} from '../optimization-algorithm.interface';

export class SchafferN2Function implements OptimizationAlgorithmInterface {
    public readonly description = '';
    public readonly name = 'Schaffer N. 2';
    public readonly searchArea = {
        min: {x: -100, y: -100},
        max: {x: 100, y: 100}
    };
    public readonly func = (x: number, y: number) => {
        const xxyyDif = x * x - y * y;
        const xxyySum = x * x + y * y;
        const sine = Math.sin(xxyyDif) * Math.sin(xxyyDif);
        const dividend = 1 + 0.001 * (xxyySum);
        return 0.5 + (sine - 0.5) / (dividend * dividend);
    }

}
