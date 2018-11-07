import {Injectable} from '@angular/core';
import {OptimizationAlgorithmInterface} from './optimization-algorithm.interface';
import {AckleyFunction} from './ackley-function/ackley-function';
import {BealeFunction} from './beale-function/beale-function';

@Injectable({
  providedIn: 'root'
})
export class OptimizationProviderService {

  constructor() {
    this.algorithms = [
      new AckleyFunction(),
      new BealeFunction()
    ];
  }

  private readonly algorithms: OptimizationAlgorithmInterface[];

  public get Algorithms() {
    return this.algorithms;
  }
}
