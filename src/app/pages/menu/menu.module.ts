import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { MenuPageRoutingModule } from "./menu-routing.module";

import { MenuPage } from "./menu.page";

const routes: Routes = [
  { path: "", redirectTo: "/menu/main", pathMatch: "full" },
  {
    path: "",
    component: MenuPage,
    children: [
      { path: "main", loadChildren: "../main/main.module#MainPageModule" },
      {
        path: "settings",
        loadChildren: "../settings/settings.module#SettingsPageModule"
      },
      { path: "about", loadChildren: "../about/about.module#AboutPageModule" }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
