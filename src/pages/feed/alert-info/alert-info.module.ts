import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlertInfoPage } from './alert-info';

@NgModule({
  declarations: [
    AlertInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(AlertInfoPage),
  ],
})
export class AlertInfoPageModule {}
