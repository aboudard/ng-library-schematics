import { NgLibModule } from '@aboudard/ng-lib';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
