import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendarVacineInfoPage } from './calendar-vacine-info';

@NgModule({
  declarations: [
    CalendarVacineInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(CalendarVacineInfoPage),
  ],
})
export class CalendarVacineInfoPageModule {}
