import { Component, OnInit } from '@angular/core';
import { Point, FunctionPoint, StartMessage } from '../webworker-provider/message.interface';
import { ActivatedRoute } from '@angular/router';
import { WebworkerProviderService } from '../webworker-provider/webworker-provider.service';
import { OptimizationProviderService } from '../algorithms/optimization-provider.service';
import { OptimizationAlgorithmInterface } from '../algorithms/optimization-algorithm.interface';
import { RepositoryInformation, WikientryService } from '../wiki-entry/wikientry.service';

@Component({
  selector: 'app-algorithms-page',
  templateUrl: './algorithms-page.component.html',
  styleUrls: ['./algorithms-page.component.scss']
})
export class AlgorithmsPageComponent implements OnInit {


  private algorithmName: string;
  public AlgorithmResults: Point[];
  public FunctionResults: FunctionPoint[];
  public algorithmInfo: RepositoryInformation;
  private functionInfo: OptimizationAlgorithmInterface;

  public get functions() {
    return this.functionProvider.Functions || [];
  }

  constructor(private readonly route: ActivatedRoute,
    private readonly workerService: WebworkerProviderService,
    private readonly wikiService: WikientryService,
    private readonly functionProvider: OptimizationProviderService) {
  /*  this.algorithmInfo = {
      markdownUrl: 'https://raw.githubusercontent.com/dhbwstudienarbeit2019/CSO/cso/README.md',
      name: 'Cat Swarm Optimization',
      owner: 'Laura Kaipl',
      parameterJsonUrl: 'https://raw.githubusercontent.com/dhbwstudienarbeit2019/CSO/cso/src/parameters.json',
      webworkerUrl: 'http://localhost:8080/dist/index.js'
    };*/
    this.algorithmInfo = {
      markdownUrl: 'http://localhost:4201/README.md',
      name: 'Cat Swarm Optimization',
      owner: 'Laura Kaipl',
      parameterJsonUrl: 'http://localhost:4201/parameters.json',
      webworkerUrl: 'http://localhost:4201/index.js'
    };
    this.route.params.subscribe(params => {
      this.algorithmName = this.convertNameToClassName(params['algorithmName']);
      console.log({ 'name': params['algorithmName'] });
      const className = this.algorithmName
        .replace(/_+?/g, '').toLowerCase();
      this.functionInfo = this.functionProvider.Functions.find(func => func.constructor.name.toLowerCase() === className);
      const worker = this.workerService.startWebworker('/assets/functionCalculator.js');
      if (this.functionInfo !== undefined && this.algorithmInfo !== undefined) {
        worker.send(<StartMessage>{
          action: 'start',
          config: {},
          func: this.functionInfo.func.toString(),
          searchArea: this.functionInfo.searchArea
        });
        worker.result.then(result => {
          this.FunctionResults = <FunctionPoint[]>result;
        }).catch(err => console.error({ err }));
        console.log(('updated url:' + this.algorithmName));
      }
    });
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
