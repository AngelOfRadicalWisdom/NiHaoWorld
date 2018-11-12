import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TakemockPage } from './takemock';

@NgModule({
  declarations: [
    TakemockPage,
  ],
  imports: [
    IonicPageModule.forChild(TakemockPage),
  ],
})
export class TakemockPageModule {}
