import {Injectable} from '@angular/core';
import {OptimizationAlgorithmInterface} from './optimization-algorithm.interface';

@Injectable({
  providedIn: 'root'
})
export class OptimizationProviderService {

  constructor() {
    this.algorithms = [];
  }

  private readonly algorithms: OptimizationAlgorithmInterface[];

  public get Algorithms() {
    return this.algorithms;
  }
}
