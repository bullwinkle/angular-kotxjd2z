import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import "zone.js/dist/zone";

import { CounterComponent } from "./my-counter";

@NgModule({
  imports: [BrowserModule],
  declarations: [CounterComponent],
  bootstrap: [CounterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
