import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Mfe1featureModule } from './mfe1feature/mfe1feature.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Mfe1featureModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
