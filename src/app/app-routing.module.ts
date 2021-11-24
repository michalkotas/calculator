import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'calculator',
    loadChildren: () =>
      import('./calculator/calculator.module').then((m) => m.CalculatorModule),
  },
];

@NgModule({
  imports: [
    // RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
