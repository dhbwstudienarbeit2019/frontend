import {OptimizationAlgorithmInterface} from '../optimization-algorithm.interface';

export class BukinFunction implements OptimizationAlgorithmInterface {
  public readonly description = '';
  public readonly name = 'Bukin Function N.6';
  public readonly func = (x: number, y: number) => 100 * Math.sqrt(Math.abs(y - 0.01 * x * x)) + 0.01 * Math.abs(x + 10);
}
