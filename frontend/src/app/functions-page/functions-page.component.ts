import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OptimizationProviderService } from '../algorithms/optimization-provider.service';
import { OptimizationAlgorithmInterface } from '../algorithms/optimization-algorithm.interface';
import { RepositoryDetailInformation } from '../wiki-entry/wikientry.service';
import { WebworkerProviderService } from '../webworker-provider/webworker-provider.service';
import { StartMessage, FunctionPoint } from '../webworker-provider/message.interface';
import { EmptyOutletComponent } from '@angular/router/src/components/empty_outlet';

@Component({
  selector: 'app-functions-page',
  templateUrl: './functions-page.component.html',
  styleUrls: ['./functions-page.component.scss']
})
export class FunctionsPageComponent implements OnInit {

  private functionName: string;
  private readonly emptyElement: OptimizationAlgorithmInterface = {
    name: '', description: '',
    func: (x, y) => 0,
    searchArea: { max: { x: 0, y: 0 }, min: { x: 0, y: 0 } }
  };
  private functionInfo: OptimizationAlgorithmInterface;
  public FunctionResults: FunctionPoint[];

  constructor(private readonly route: ActivatedRoute,
    private readonly workerService: WebworkerProviderService,
    private readonly functionProvider: OptimizationProviderService) {
    this.functionName = '';
    this.functionInfo = this.emptyElement;
    this.route.params.subscribe(params => {
      this.functionName = this.convertNameToClassName(params['functionName'])
        .replace(/_+?/g, '')
        .replace('function', '')
        .replace('Function', '').toLowerCase();
      this.functionInfo = this.functionProvider.Functions.find(func => func.name.toLowerCase() === this.functionName);
      console.log(this.functionProvider.Functions.map(x => x.name));
      if (this.functionInfo === undefined) {
        console.log({ 'no function found:': this.functionName });
        return;
      } else {
        console.log({ 'function found:': this.functionInfo });
      }
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
    console.log(name);
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
      markdownUrl: '/assets/functions/' + this.functionInfo.name.toLowerCase() + '-function' + '/README.md'
    };
  }


  ngOnInit() {
  }

}
