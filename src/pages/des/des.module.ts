import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DesPage } from './des';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    DesPage,
  ],
  imports: [
    IonicPageModule.forChild(DesPage),
    PipesModule
  ],
})
export class DesPageModule {}
