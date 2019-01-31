import {HomeComponent} from "./pages/home/page";
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [


  {path: '', component: HomeComponent},

  {path: '**', redirectTo: ''},
];


export const routing = RouterModule.forRoot(appRoutes);
