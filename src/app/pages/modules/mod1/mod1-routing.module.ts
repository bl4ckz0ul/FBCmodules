import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mod1Page } from './mod1.page';

const routes: Routes = [
  {
    path: '',
    component: Mod1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mod1PageRoutingModule {}
