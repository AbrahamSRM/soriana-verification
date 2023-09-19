import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Soriana1Component } from './pages/soriana1/soriana1.component';

const routes: Routes = [
  { path: '653', component: Soriana1Component},
  { path: '', redirectTo: '/653', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
