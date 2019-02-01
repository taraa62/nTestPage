import {NgModule} from "@angular/core";
import {HomeComponent} from "./page";
import {MatIconModule, MatToolbarModule} from "@angular/material";


@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [
    MatToolbarModule,
    MatIconModule
  ],
})
export class HomeModule {}
