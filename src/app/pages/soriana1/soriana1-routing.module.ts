import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Soriana1Component } from './soriana1.component';


const routes: Routes = [
  {
    path: '',
    component: Soriana1Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Soriana1RoutingModule {}
