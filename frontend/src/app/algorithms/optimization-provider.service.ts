import {Injectable} from '@angular/core';
import {OptimizationAlgorithmInterface} from './optimization-algorithm.interface';
import {AckleyFunction} from './ackley-function/ackley-function';

@Injectable({
  providedIn: 'root'
})
export class OptimizationProviderService {

  constructor() {
    this.algorithms = [new AckleyFunction()];
  }

  private readonly algorithms: OptimizationAlgorithmInterface[];

  public get Algorithms() {
    return this.algorithms;
  }
}
