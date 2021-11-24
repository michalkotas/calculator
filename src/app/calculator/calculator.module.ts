import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorRoutingModule } from './calculator-routing.module';
import { HomeComponent } from './components/home/home.component';
import { BridgeModule } from 'bridge';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CalculatorRoutingModule,
    BridgeModule,
    IonicModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
      },
    ]),
  ],
})
export class CalculatorModule {}
