import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherMainComponent } from './Components/weather-main/weather-main.component';

// import HttpClientModule to enable HttpClient in Angular application
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    WeatherMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule //add this here to enable HttpClient in Angular application
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
