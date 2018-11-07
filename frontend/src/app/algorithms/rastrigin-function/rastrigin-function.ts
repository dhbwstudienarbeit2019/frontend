import {OptimizationAlgorithmInterface} from '../optimization-algorithm.interface';

export class RastriginFunction implements OptimizationAlgorithmInterface {
  public readonly description = '';
  public readonly name = 'Rastrigin';
  public readonly func = (x: number, y: number) => {
    const A = 10;
    const dif = v => v * v - A * Math.cos(2 * Math.PI * v);
    return A * 2 + dif(x) + dif(y);
  }
}
