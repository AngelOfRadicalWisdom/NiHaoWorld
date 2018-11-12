import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TakelessonPage } from './takelesson';

@NgModule({
  declarations: [
    TakelessonPage,
  ],
  imports: [
    IonicPageModule.forChild(TakelessonPage),
  ],
})
export class TakelessonPageModule {}
