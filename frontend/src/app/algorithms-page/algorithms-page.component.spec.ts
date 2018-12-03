import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorithmsPageComponent } from './algorithms-page.component';
import { WikiEntryComponent } from '../wiki-entry/wiki-entry.component';
import { MarkdownComponent, MarkdownService, MarkdownModule } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('AlgorithmsPageComponent', () => {
  let component: AlgorithmsPageComponent;
  let fixture: ComponentFixture<AlgorithmsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AlgorithmsPageComponent, WikiEntryComponent],
      imports: [
        HttpClientModule,
        MarkdownModule.forRoot({ loader: HttpClient })
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgorithmsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
