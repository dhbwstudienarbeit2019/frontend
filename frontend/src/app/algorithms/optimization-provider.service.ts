import {Injectable} from '@angular/core';
import {OptimizationAlgorithmInterface} from './optimization-algorithm.interface';
import {AckleyFunction} from './ackley-function/ackley-function';
import {BealeFunction} from './beale-function/beale-function';
import {BoothFunction} from './booth-function/booth-function';
import {RastriginFunction} from './rastrigin-function/rastrigin-function';
import {RosenbrockFunction} from './rosenbrock-function/rosenbrock-function';
import {GoldensteinFunction} from './goldenstein-function/goldenstein-function';
import {SphereFunction} from './sphere-function/sphere-function';
import {BukinFunction} from './bukin-function/bukin-function';
import {MatyasFunction} from './matyas-function/matyas-function';
import {LeviFunction} from './levi-function/levi-function';
import {HimmelblauFunction} from './himmelblau-function/himmelblau-function';
import {ThreeHumpCamelFunction} from './threehumpcamel-function/three-hump-camel-function';
import {EasomFunction} from './easom-function/easom-function';

@Injectable({
  providedIn: 'root'
})
export class OptimizationProviderService {

  constructor() {
    this.algorithms = [
      new AckleyFunction(),
      new BealeFunction(),
      new BoothFunction(),
      new RastriginFunction(),
      new RosenbrockFunction(),
      new GoldensteinFunction(),
      new SphereFunction(),
      new BukinFunction(),
      new MatyasFunction(),
      new LeviFunction(),
      new HimmelblauFunction(),
      new ThreeHumpCamelFunction(),
      new EasomFunction()
    ];
  }

  private readonly algorithms: OptimizationAlgorithmInterface[];

  public get Algorithms() {
    return this.algorithms;
  }
}
