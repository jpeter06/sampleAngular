import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp1Component } from './comp1/comp1.component';
import { LazyRoutingModule } from './lazy-routing.module';

@NgModule({
  declarations: [Comp1Component],
  imports: [  CommonModule ,LazyRoutingModule]
})
export class LazyModule { }
