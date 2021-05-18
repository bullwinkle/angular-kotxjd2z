var _dec, _class;

import { packd_export_2 } from 'https://srv.divriots.com/packd/@angular/core,@angular/platform-browser,@angular/platform-browser-dynamic,tslib,zone.js/dist/zone';const { platformBrowserDynamic } = packd_export_2;;
import { packd_export_0 } from 'https://srv.divriots.com/packd/@angular/core,@angular/platform-browser,@angular/platform-browser-dynamic,tslib,zone.js/dist/zone';const { NgModule,CUSTOM_ELEMENTS_SCHEMA } = packd_export_0;;
import { packd_export_1 } from 'https://srv.divriots.com/packd/@angular/core,@angular/platform-browser,@angular/platform-browser-dynamic,tslib,zone.js/dist/zone';const { BrowserModule } = packd_export_1;;
import { packd_export_4 } from 'https://srv.divriots.com/packd/@angular/core,@angular/platform-browser,@angular/platform-browser-dynamic,tslib,zone.js/dist/zone';;
import { CounterComponent } from "./my-counter.js";
let AppModule = (_dec = NgModule({
  imports: [BrowserModule],
  declarations: [CounterComponent],
  bootstrap: [CounterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
}), _dec(_class = class AppModule {}) || _class);
platformBrowserDynamic().bootstrapModule(AppModule);