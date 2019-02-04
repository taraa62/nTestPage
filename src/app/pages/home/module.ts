import {NgModule} from "@angular/core";
import {HomeComponent} from "./page";
import {MatIconModule, MatToolbarModule} from "@angular/material";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {TableModule} from "../tableUserCofnig/module";


@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [
    MatToolbarModule,
    MatIconModule,
    TableModule
  ],
})
export class HomeModule {}
