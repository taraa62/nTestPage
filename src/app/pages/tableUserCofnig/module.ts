import {NgModule} from "@angular/core";
import {MatButtonModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatTableModule} from "@angular/material";

import {TableComponent} from "./table";
import {FormsModule} from "@angular/forms";
import {CreateUserComponent} from "../user/create-user";
import {DragDropModule} from "@angular/cdk/drag-drop";

@NgModule({
  imports: [
    MatTableModule,
    MatCheckboxModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    DragDropModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports: [
    TableComponent,
    CreateUserComponent

  ],
  entryComponents: [TableComponent, CreateUserComponent],
  declarations: [TableComponent, CreateUserComponent],
  bootstrap: [],
  providers: []
})
export class TableModule {

}
