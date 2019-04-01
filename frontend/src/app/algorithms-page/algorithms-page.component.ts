import { Component, OnInit, ViewChild } from '@angular/core';
import { Point, FunctionPoint, StartMessage } from '../webworker-provider/message.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { WebworkerProviderService } from '../webworker-provider/webworker-provider.service';
import { OptimizationProviderService } from '../algorithms/optimization-provider.service';
import { OptimizationAlgorithmInterface } from '../algorithms/optimization-algorithm.interface';
import { RepositoryInformation, WikientryService, RepositoryDetailInformation } from '../wiki-entry/wikientry.service';
import { ParametersComponent } from '../parameters/parameters.component';
import { RepositoryProvider } from '../repository-provider';

@Component({
  selector: 'app-algorithms-page',
  templateUrl: './algorithms-page.component.html',
  styleUrls: ['./algorithms-page.component.scss']
})
export class AlgorithmsPageComponent implements OnInit {

  @ViewChild('parameters')
  public parameters: ParametersComponent;

  public AlgorithmResults: FunctionPoint[];
  public FunctionResults: FunctionPoint[];
  public algorithmInfo: RepositoryDetailInformation;
  private functionInfo: OptimizationAlgorithmInterface;

  public get functions() {
    return this.functionProvider.Functions || [];
  }

  public evaluate() {
    const startConfig = this.parameters.makeObject();
    const worker = this.workerService.startWebworker<[]>(this.algorithmInfo.webworkerUrl);
    worker.send(<StartMessage>{
      action: 'start',
      config: startConfig,
      func: this.functionInfo.func.toString(),
      searchArea: this.functionInfo.searchArea,
    });
    console.log({ startConfig, worker, func: this.functionInfo.func.toString() });
    worker.result
      .then(value => {
        this.AlgorithmResults = (value as Point[]).map(point => {
          return {
            value: this.functionInfo.func(point.x, point.y),
            ...point
          };
        }
        );
        console.log([this.FunctionResults && this.AlgorithmResults, this.FunctionResults, this.AlgorithmResults]);
        console.log(value);
      })
      .catch(err => console.error(err));
    console.log('worker started');
  }
  public select(event: any) {

    const selectedIdx = event.target.selectedIndex;
    this.functionInfo = this.functions[selectedIdx];
    this.router.navigateByUrl('/algorithms/' + this.algorithmInfo.name + '/' + this.functionInfo.name + 'function');
    console.log({ selected: this.functionInfo });
  }
  public getParameters(): any {
    return this.parameters.makeObject();
  }

  constructor(private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly workerService: WebworkerProviderService,
    private readonly wikiService: WikientryService,
    private readonly repositoryProvider: RepositoryProvider,
    private readonly functionProvider: OptimizationProviderService) {
    this.algorithmInfo = repositoryProvider.Repositories[0];
    this.route.params.subscribe(params => {
      const algorithmName = this.convertNameToClassName(params['algorithmName']);
      const functionName = this.convertNameToClassName(params['functionName'])
        .replace(/_+?/g, '')
        .replace('function', '')
        .replace('Function', '')
        .toLowerCase();
      console.log({ algorithmName, functionName });

      this.functionInfo = this.functionProvider.Functions.find(func => func.name.toLowerCase() === functionName);
      console.log({
        fk: this.functionInfo,
        al: this.algorithmInfo,
      });

      const worker = this.workerService.startWebworker<[]>('/assets/functionCalculator.js');
      if (this.functionInfo !== undefined && this.algorithmInfo !== undefined) {
        worker.send({
          ... this.functionInfo,
          func: this.functionInfo.func.toString(),
        });
        worker.result.then(result => {
          this.FunctionResults = <FunctionPoint[]>result;
          console.log([this.FunctionResults, this.FunctionResults]);
        }).catch(err => console.error({ err }));
      }
    });

    this.functionInfo = this.functions[0];
  }

  private convertNameToClassName(name: string): string {
    return (name || '').replace(/_/g, '').replace(/-/g, '').toLowerCase();
  }
  private convertNameToPathname(name: string): string {
    if (/.*[A-Z].*[A-Z].*/.test(name) && name.indexOf('-') === -1) {
      return name.replace(/([^_A-Z])([A-Z])/g, '$1-$2').toLowerCase();
    }
    if (name.indexOf('-') > -1) {
      return name.replace(/_/g, '-').toLowerCase();
    }
  }

  ngOnInit() {
  }

}
