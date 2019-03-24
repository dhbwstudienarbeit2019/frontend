import { Component, OnInit, ViewChild } from '@angular/core';
import { Point, FunctionPoint, StartMessage } from '../webworker-provider/message.interface';
import { ActivatedRoute } from '@angular/router';
import { WebworkerProviderService } from '../webworker-provider/webworker-provider.service';
import { OptimizationProviderService } from '../algorithms/optimization-provider.service';
import { OptimizationAlgorithmInterface } from '../algorithms/optimization-algorithm.interface';
import { RepositoryInformation, WikientryService } from '../wiki-entry/wikientry.service';
import { ParametersComponent } from '../parameters/parameters.component';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-algorithms-page',
  templateUrl: './algorithms-page.component.html',
  styleUrls: ['./algorithms-page.component.scss']
})
export class AlgorithmsPageComponent implements OnInit {

  @ViewChild('parameters')
  public parameters: ParametersComponent;

  public AlgorithmResults: Point[];
  public FunctionResults: FunctionPoint[];
  public algorithmInfo: RepositoryInformation;
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
        this.AlgorithmResults = value;
        console.log([this.FunctionResults && this.AlgorithmResults, this.FunctionResults, this.AlgorithmResults]);
        console.log(value);
      })
      .catch(err => console.error(err));
    console.log('worker started');
  }
  public select(event: any) {
    const selectedIdx = event.target.selectedIndex;
    this.functionInfo = this.functions[selectedIdx];
  }
  public getParameters(): any {
    return this.parameters.makeObject();
  }

  constructor(private readonly route: ActivatedRoute,
    private readonly workerService: WebworkerProviderService,
    private readonly wikiService: WikientryService,
    private readonly functionProvider: OptimizationProviderService) {
    /* this.algorithmInfo = {
       markdownUrl: 'https://cdn.jsdelivr.net/gh/dhbwstudienarbeit2019/CSO@1.2/dist/README.md',
       name: 'Cat Swarm Optimization',
       owner: 'Laura Kaipl',
       parameterJsonUrl: 'https://cdn.jsdelivr.net/gh/dhbwstudienarbeit2019/CSO@1.2/dist/parameters.json',
       webworkerUrl: 'https://cdn.jsdelivr.net/gh/dhbwstudienarbeit2019/CSO@1.2/dist/index.js'
     };*/
    this.algorithmInfo = {
      markdownUrl: 'http://localhost:4201/README.md',
      name: 'Cat Swarm Optimization',
      owner: 'Laura Kaipl',
      parameterJsonUrl: 'http://localhost:4201/parameters.json',
      webworkerUrl: 'http://localhost:4201/index.js'
    };
    this.route.params.subscribe(params => {
      const algorithmName = this.convertNameToClassName(params['algorithmName']);
      const functionName = this.convertNameToClassName(params['functionName']).replace(/_+?/g, '').toLowerCase();
      console.log({ algorithmName, functionName });

      this.functionInfo = this.functionProvider.Functions.find(func => func.constructor.name.toLowerCase() === functionName);
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
