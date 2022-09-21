import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaMainComponent } from './pizza-main/pizza-main.component';

//added this
import { HttpClientModule } from "@angular/common/http";
import { PizzaNavComponent } from './pizza-nav/pizza-nav.component';
import { PizzaItemComponent } from './pizza-main/pizza-item/pizza-item.component';

//added for ngModel
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PizzaMainComponent,
    PizzaNavComponent,
    PizzaItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  //added this
    FormsModule //added for ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
