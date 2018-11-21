import {OptimizationAlgorithmInterface} from '../optimization-algorithm.interface';

export class MatyasFunction implements OptimizationAlgorithmInterface {
  public readonly description = '';
  public readonly name = 'Matyas';
  public readonly func = (x: number, y: number) => 0.26 * (x * x + y * y) - 0.48 * x * y;
}
