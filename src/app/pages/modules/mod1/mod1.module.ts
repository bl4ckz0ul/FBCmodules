import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mod1PageRoutingModule } from './mod1-routing.module';

import { Mod1Page } from './mod1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mod1PageRoutingModule
  ],
  declarations: [Mod1Page]
})
export class Mod1PageModule {}
