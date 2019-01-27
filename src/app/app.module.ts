import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SpinnerModel} from './core/spinner/spinner.model';
import {MessageService} from './core/utils/MessageService';
import {Service} from './core/utils/Service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SpinnerModel,
    HttpClientModule,
  ],
  providers: [MessageService, Service],
  bootstrap: [AppComponent]
})
export class AppModule {
}


