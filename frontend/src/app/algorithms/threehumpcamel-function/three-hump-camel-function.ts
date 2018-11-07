import {OptimizationAlgorithmInterface} from '../optimization-algorithm.interface';

export class ThreeHumpCamelFunction implements OptimizationAlgorithmInterface {
  public readonly description = '';
  public readonly name = 'Three-hump camel';
  public readonly func = (x: number, y: number) => {
    const x2 = x * x;
    const x4 = x2 * x2;
    const x6 = x4 * x2;
    return 2 * x2 - 1.05 * x4 + x6 / 6 + x * y + y * y;
  };
}
