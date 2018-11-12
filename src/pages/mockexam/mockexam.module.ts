import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MockexamPage } from './mockexam';

@NgModule({
  declarations: [
    MockexamPage,
  ],
  imports: [
    IonicPageModule.forChild(MockexamPage),
  ],
})
export class MockexamPageModule {}
