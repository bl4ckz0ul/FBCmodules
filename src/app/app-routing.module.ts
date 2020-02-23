import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "/menu/main", pathMatch: "full" },
  {
    path: "menu",
    loadChildren: "./pages/menu/menu.module#MenuPageModule"
  },
  {
    path: 'mod1',
    loadChildren: () => import('./pages/modules/mod1/mod1.module').then( m => m.Mod1PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
