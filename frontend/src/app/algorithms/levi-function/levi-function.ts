import {OptimizationAlgorithmInterface} from '../optimization-algorithm.interface';

export class LeviFunction implements OptimizationAlgorithmInterface {
  public readonly description = '';
  public readonly name = 'Levi N.13';
  public readonly func = (x: number, y: number) => {
    const pt0 = (n) => Math.sin(n * Math.PI * y);
    const pt1 = x - 1;
    const pt2 = 1 + pt0(3) * pt0(3);
    const pt3 = y - 1;
    const pt4 = 1 + pt0(2) * pt0(2);
    return pt0(3) * pt0(3) + pt1 * pt1 * pt2 + pt3 * pt3 * pt4;
  };

}