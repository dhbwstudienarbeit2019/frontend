import { Component, OnInit } from '@angular/core';
import { OptimizationProviderService } from '../algorithms/optimization-provider.service';

@Component({
  selector: 'app-functions-list',
  templateUrl: './functions-list.component.html',
  styleUrls: ['./functions-list.component.scss']
})
export class FunctionsListComponent implements OnInit {

  constructor(private readonly functionProvider: OptimizationProviderService) { }
  public searchText = '';
  public get functions() {
    return this.functionProvider.Functions;
  }
  public get shownFunctions() {
    return this.functions.filter(x => x.name.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1);
  }
  ngOnInit() {
  }

}
