import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SpinnerModel} from './core/spinner/spinner.model';
import {MessageService} from './core/utils/MessageService';
import {Service} from './core/utils/Service';
import {HttpClientModule} from '@angular/common/http';

import {HomeModule} from './pages/home/module';
import {routing} from './routes';
import {LoginComponent} from './pages/login/login';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    routing,
    SpinnerModel,
    HttpClientModule,
    HomeModule
  ],
  providers: [MessageService, Service],
  bootstrap: [AppComponent]
})
export class AppModule {
}


