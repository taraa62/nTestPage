import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SpinnerModel} from './core/spinner/spinner.model';
import {MessageService} from './core/utils/MessageService';
import {Service} from './core/utils/Service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {HomeModule} from './pages/home/module';
import {routing} from './routes';
import {LoginComponent} from './pages/login/login';
import {ReactiveFormsModule} from '@angular/forms';
import {JwtInterceptor} from "./core/_helpers/jwt.interceptor";
import {ErrorInterceptor} from "./core/_helpers/error.interceptor";
import {TableModule} from "./pages/tableUserCofnig/module";


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
    HomeModule,
    TableModule,

  ],
  providers: [MessageService, Service,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}


