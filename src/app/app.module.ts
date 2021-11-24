import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

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
  providers: [],
  entryComponents: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
