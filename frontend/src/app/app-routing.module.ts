import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FunctionsPageComponent } from './functions-page/functions-page.component';
import { AlgorithmsPageComponent } from './algorithms-page/algorithms-page.component';

const routes: Routes = [
  {
    path: 'functions/:algorithmName',
    component: FunctionsPageComponent
  },
  {
    path: 'algorithms/:algorithmName',
    component: AlgorithmsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
