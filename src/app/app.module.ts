import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RouteReuseStrategy } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    IonicModule.forRoot(),
    BrowserModule,
    // IonicRouteStrategy,
    AppRoutingModule,
  ],
  // providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  entryComponents: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
