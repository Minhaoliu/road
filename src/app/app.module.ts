import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { Road1Component } from './containers/road1/road1.component';
import { MapComponent } from './containers/map/map.component';
import { BROWSER_GLOBALS_PROVIDERS } from './commons/services/utils/browser-globals';
import { LazyMinemapLoaderService } from './commons/services/loaders/lazy-minemap-loader.service';
import { MinemapLoaderService } from './commons/services/loaders/minemap-loader.service';
import { Minimatch } from 'minimatch';
import { BaidumapComponent } from './containers/baidumap/baidumap.component';




registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    Road1Component,
    MapComponent,
    BaidumapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    BROWSER_GLOBALS_PROVIDERS,
    {provide: MinemapLoaderService, useClass: LazyMinemapLoaderService},
    { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
