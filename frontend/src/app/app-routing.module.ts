import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FunctionsPageComponent } from './functions-page/functions-page.component';
import { AlgorithmsPageComponent } from './algorithms-page/algorithms-page.component';
import { FunctionsListComponent } from './functions-list/functions-list.component';

const routes: Routes = [
  {
    path: 'functions/:algorithmName',
    component: FunctionsPageComponent
  }, {
    path: 'functions',
    component: FunctionsListComponent
  },
  {
    path: 'algorithms/:algorithmName/:functionName',
    component: AlgorithmsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
