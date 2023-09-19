import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Soriana1Component } from './soriana1.component';
import { Soriana1RoutingModule } from './soriana1-routing.module';

@NgModule({
  declarations: [Soriana1Component],
  imports: [
    CommonModule,
    Soriana1RoutingModule
  ],
  exports : [
    Soriana1Component
  ]
})
export class Soriana1Module {}
