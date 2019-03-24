import { OptimizationAlgorithmInterface } from '../optimization-algorithm.interface';

export class RastriginFunction implements OptimizationAlgorithmInterface {
  public readonly description = `The Rastrigin Function has several local minima.
   It is highly multimodal, but locations of the minima are regularly distributed.`;
  public readonly name = 'Rastrigin';
  public readonly searchArea = { min: { x: -5.12, y: -5.12 }, max: { x: 5.12, y: 5.12 } };
  public readonly func = (x: number, y: number) => {
    const A = 10;
    const dif = v => v * v - A * Math.cos(2 * Math.PI * v);
    return A * 2 + dif(x) + dif(y);
  }
}
