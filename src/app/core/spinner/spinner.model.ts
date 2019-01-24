import {NgModule} from '@angular/core';
import {MatProgressSpinnerModule, MatToolbarModule} from '@angular/material';
import {SpinnerComponent} from './spinner.component';

@NgModule({
  imports: [
    MatProgressSpinnerModule,
    MatToolbarModule
  ],
  exports: [
    SpinnerComponent

  ],
  entryComponents: [SpinnerComponent],
  declarations: [SpinnerComponent],
  bootstrap: [],
  providers: []
})
export class SpinnerModel {
}


