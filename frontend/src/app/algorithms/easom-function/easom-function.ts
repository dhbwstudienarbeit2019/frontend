import {OptimizationAlgorithmInterface} from '../optimization-algorithm.interface';

export class EasomFunction implements OptimizationAlgorithmInterface {
  public readonly description = '';
  public readonly name = 'Easom';
  public readonly func = (x: number, y: number) => {
    const pt1 = x - Math.PI;
    const pt2 = y - Math.PI;
    return -Math.cos(x) * Math.cos(y) * Math.exp(-(pt1 * pt1 + pt2 * pt2));
  };
}
