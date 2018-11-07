import {OptimizationAlgorithmInterface} from '../optimization-algorithm.interface';

export class SphereFunction implements OptimizationAlgorithmInterface {
  public readonly description = '';
  public readonly name = 'Sphere';
  public readonly func = (x: number, y: number) => x * x + y * y;
}
