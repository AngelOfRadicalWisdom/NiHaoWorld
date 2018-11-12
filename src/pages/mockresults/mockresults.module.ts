import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MockresultsPage } from './mockresults';

@NgModule({
  declarations: [
    MockresultsPage,
  ],
  imports: [
    IonicPageModule.forChild(MockresultsPage),
  ],
})
export class MockresultsPageModule {}
