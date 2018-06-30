import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddVacineInfoPage } from './add-vacine-info';

@NgModule({
  declarations: [
    AddVacineInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(AddVacineInfoPage),
  ],
})
export class AddVacineInfoPageModule {}
