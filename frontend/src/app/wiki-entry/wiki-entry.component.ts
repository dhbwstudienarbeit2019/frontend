import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { RepositoryDetailInformation } from './wikientry.service';
import { MarkdownComponent, MarkdownService } from 'ngx-markdown';
import { Renderer } from 'marked';
import isAbsoluteUrl from 'is-absolute-url';

@Component({
  selector: 'app-wiki-entry',
  templateUrl: './wiki-entry.component.html',
  styleUrls: ['./wiki-entry.component.scss']
})
export class WikiEntryComponent implements OnInit {

  @ViewChild('markdown')
  public markdownComponent: MarkdownComponent;
  private _repo: RepositoryDetailInformation;
  constructor(private readonly markdownService: MarkdownService) {
    this._repo = {
      markdownUrl: '',
      name: '',
      owner: '',
      parameterJsonUrl: '',
      webworkerUrl: '',
      description: '',
      lastUpdated: '',
      repository: ''
    };
  }

  @Input()
  public set repo(value: RepositoryDetailInformation) {
    this._repo = value;
    console.log(this.repo.markdownUrl.replace(/[^/]*$/, ''));
    this.markdownService.renderer = new Renderer({
      baseUrl: this.repo.markdownUrl.replace(/[^/]*$/, ''),
    });
    const rendererFunction = this.markdownService.renderer.image;
    this.markdownService.renderer.image = (href, title, text) => {
      if (!isAbsoluteUrl(href)) {
        href = this.repo.markdownUrl + '/../' + href;
      }
      return rendererFunction.apply(this.markdownService.renderer, [href, title, text]);
    };
    this.markdownComponent.markdownService = this.markdownService;
  }
  public get repo() {
    return this._repo;
  }

  ngOnInit() {
  }

}
