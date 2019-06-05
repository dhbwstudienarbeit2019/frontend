import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainpageComponent } from './mainpage/mainpage.component';
import { GraphComponent } from './graph/graph.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ParametersComponent } from './parameters/parameters.component';
import { WikiEntryComponent } from './wiki-entry/wiki-entry.component';
import { AlgorithmsPageComponent } from './algorithms-page/algorithms-page.component';
import { FunctionsPageComponent } from './functions-page/functions-page.component';
import { WikientryService } from './wiki-entry/wikientry.service';
import { OptimizationProviderService } from './algorithms/optimization-provider.service';
import { FunctionsListComponent } from './functions-list/functions-list.component';
import { AlgorithmsListComponent } from './algorithms-list/algorithms-list.component';
import { FormsModule } from '@angular/forms';
import { RepositoryProvider } from './repository-provider';
import { AboutPageComponent } from './about-page/about-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainpageComponent,
    GraphComponent,
    SidebarComponent,
    ParametersComponent,
    WikiEntryComponent,
    AlgorithmsPageComponent,
    FunctionsPageComponent,
    FunctionsListComponent,
    AlgorithmsListComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    FormsModule,
    NgbModule,
  ],
  providers: [
    WikientryService,
    RepositoryProvider,
    OptimizationProviderService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
