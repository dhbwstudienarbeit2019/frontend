import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.scss']
})
export class ParametersComponent implements OnInit {

  constructor(private readonly httpClient: HttpClient) {

  }

  private previousParameterUrl = '';
  private parameterConfig: any[] = [];

  @Input()
  public set parameterUrl(url: string) {
    if (url !== this.previousParameterUrl) {
      this.previousParameterUrl = url;
      this.httpClient.get(url).toPromise()
        .then(config => {
          this.parameterConfig = (<{ item: any[] }>config).item;
        })
        .catch(err => console.error({ err, url }));
    }
  }
  public stringify(input: any) {
    return JSON.stringify(input);
  }

  public getParamType(parameter: ParameterConfig): 'range' | 'number' | 'boolean' | 'error' {
    if (parameter === undefined || parameter.parameter === undefined) {
      console.log(parameter);
      return 'error';
    }
    if (typeof (parameter.parameter.enabled) === 'boolean') {
      return 'boolean';
    }
    if (typeof (parameter.parameter.maximum) === 'number' && typeof (parameter.parameter.minimum) === 'number') {
      return 'range';
    }
    return 'number';
  }



  ngOnInit() {
  }

}

export interface ParameterConfig {
  name: string;
  title: string;
  description: string;
  parameter: {
    enabled: boolean;
    value: number;
    minimum: number;
    maximum: number;
  };
}
