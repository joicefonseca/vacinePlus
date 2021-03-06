import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CalendarVacineInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calendar-vacine-info',
  templateUrl: 'calendar-vacine-info.html',
})
export class CalendarVacineInfoPage {

  public calendars = [
    { nome: 'Anti-Pólio', date: '16/02/15' },
    { nome: 'DPT(Tríplice)', date: '14/12/16' },
    { nome: 'Contra Hepatite B', date: '06/02/17' },
    { nome: 'BCG', date: '20/05/17' },
    { nome: 'Contra Sarampo:', date: '02/09/18' },
    { nome: 'Febre-Amarela', date: '20/05/18' },
    { nome: 'H1N1', date: '04/03/18' },
    { nome: 'Poliomelite', date: '08/05/18' },
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarVacineInfoPage');
  }

}
