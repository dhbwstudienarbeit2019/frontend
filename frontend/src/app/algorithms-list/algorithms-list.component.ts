import { Component, OnInit } from '@angular/core';
import { RepositoryProvider } from '../repository-provider';

@Component({
  selector: 'app-algorithms-list',
  templateUrl: './algorithms-list.component.html',
  styleUrls: ['./algorithms-list.component.scss']
})
export class AlgorithmsListComponent implements OnInit {

  constructor( private readonly repositoryProvider:RepositoryProvider) { }
  public searchText = '';
  public get algorithms() {
    return this.repositoryProvider.Repositories;
  }
  public get shownAlgorithms() {
    return this.algorithms.filter(x => x.name.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1);
  }
  ngOnInit() {
  }

}
