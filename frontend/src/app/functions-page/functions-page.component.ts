import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OptimizationProviderService } from '../algorithms/optimization-provider.service';
import { OptimizationAlgorithmInterface } from '../algorithms/optimization-algorithm.interface';
import { RepositoryDetailInformation } from '../wiki-entry/wikientry.service';
import { WebworkerProviderService } from '../webworker-provider/webworker-provider.service';
import { StartMessage, FunctionPoint } from '../webworker-provider/message.interface';

@Component({
  selector: 'app-functions-page',
  templateUrl: './functions-page.component.html',
  styleUrls: ['./functions-page.component.scss']
})
export class FunctionsPageComponent implements OnInit {

  private functionName: string;
  private functionInfo: OptimizationAlgorithmInterface;
  public FunctionResults: FunctionPoint[];

  constructor(private readonly route: ActivatedRoute,
    private readonly workerService: WebworkerProviderService,
    private readonly functionProvider: OptimizationProviderService) {
    this.route.params.subscribe(params => {
      this.functionName = this.convertNameToClassName(params['algorithmName']);
      const className = this.functionName
        /*   .replace(/-+?/g, '')*/
        .replace(/_+?/g, '').toLowerCase();
      this.functionInfo = this.functionProvider.Functions.find(func => func.constructor.name.toLowerCase() === className);
      const worker = this.workerService.startWebworker('/assets/functionCalculator.js');
      worker.send(<StartMessage>{
        action: 'start',
        config: {},
        func: this.functionInfo.func.toString(),
        searchArea: this.functionInfo.searchArea
      });
      worker.result.then(result => {
        this.FunctionResults = <FunctionPoint[]>result;
      }).catch(err => console.error({ err }));
      console.log(('updated url:' + this.functionName));
    });
  }

  private convertNameToClassName(name: string): string {
    return name.replace(/_/g, '').replace(/-/g, '').toLowerCase();
  }
  private convertNameToPathname(name: string): string {
    if (/.*[A-Z].*[A-Z].*/.test(name) && name.indexOf('-') === -1) {
      return name.replace(/([^_A-Z])([A-Z])/g, '$1-$2').toLowerCase();
    }
    if (name.indexOf('-') > -1) {
      return name.replace(/_/g, '-').toLowerCase();
    }
  }

  public get displayInfo(): RepositoryDetailInformation {
    return <RepositoryDetailInformation>{
      name: this.functionInfo.name,
      markdownUrl: '/assets/functions/' + this.convertNameToPathname(this.functionInfo.constructor.name) + '/README.md'
    };
  }


  ngOnInit() {
  }

}
