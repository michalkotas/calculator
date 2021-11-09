import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorRoutingModule } from './calculator-routing.module';
import { HomeComponent } from './components/home/home.component';
import { BridgeModule } from 'bridge';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, CalculatorRoutingModule, BridgeModule],
})
export class CalculatorModule {}
